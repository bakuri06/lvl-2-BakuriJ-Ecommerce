import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import "./style.css";
import Flag from "./Flag";
import { Link as MLink } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { HOMEPAGE, SHOPPINGCART, SIGNIN, SIGNUP } from "../../routes";
import { PRODUCT_LIST } from "../../routes";
import { SINGLE_LIST } from "../../routes";
import { ADMIN } from "../../routes";
import { UserContext } from "./../../store/UserContextProvider";
import data from "../../api/data";
import { Box } from "@material-ui/core";
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: "99999",
    transition: "0.6s",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paint: {
    backgroundColor: "#fff",
    transition: "0.6s",
    color: "black",
  },
  button: {
    color: "black",
    borderColor: "black",
    borderRadius: 16,
  },
}));

export default function Navbar({ isAdmin }) {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);
  const userData = useContext(UserContext);
  const token = localStorage.getItem("token");

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const Logout = () => {
    userData.setData({
      ...data,
      isLoggedIn: false,
      isLoggingIn: false,
    });
    localStorage.removeItem("token");
  };

  const coutData = () => {
    if (userData.data.isLoggedIn == true) {
      userData.setData({
        ...userData.data,
      });
    }

    console.log(userData.data.product);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={classes.root}>
      <AppBar
        className={navbar ? classes.paint : classes.root}
        color="transparent"
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
          </Typography>
          <i className="fas fa-bars"></i>

          {isAdmin ? (
            ""
          ) : (
            <ul className="flexed">
              <li>
                <MLink component={Link} to={HOMEPAGE}>
                  Home
                </MLink>
                <MLink component={Link} to={PRODUCT_LIST}>
                  List
                </MLink>
                <MLink component={Link} to={SINGLE_LIST}>
                  Single
                </MLink>
                <MLink component={Link} to={ADMIN}>
                  Admin
                </MLink>
              </li>

              <li>
                <i className="fas fa-shopping-cart pl-0"></i>
                <MLink component={Link} to={SHOPPINGCART}>
                  <i className="badge-pill">{userData.data.counter}</i>
                </MLink>
              </li>
              <li>
                <Flag />
              </li>
              <li>
                <a href="#!">Shop</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
              {userData.data.isLoggingIn ? (
                <Box component="div" display="flex" alignItems="center">
                  <Box component="div" mr={2}>
                    <img
                      className="avatar"
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      alt="this logo"
                    ></img>
                  </Box>
                  <Button
                    href={PRODUCT_LIST}
                    variant="outlined"
                    className={classes.button}
                    onClick={Logout}
                  >
                    Log out
                  </Button>
                </Box>
              ) : (
                <>
                  <li>
                    <a href={SIGNIN}>Sign in</a>
                  </li>
                  <li>
                    <Button
                      href={SIGNUP}
                      variant="outlined"
                      className={classes.button}
                    >
                      Sign Up
                    </Button>
                  </li>
                </>
              )}
            </ul>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
