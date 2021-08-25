import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Api from "../../api/Api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./../../store/user/userSelector";
import { addToCart } from "../../store/user/userActionCreator";
import { addProduct } from "./../../store/user/userActionCreator";
import Cookies from "js-cookie";
import { setCookie } from "../../helpers";
import ProductList from "../../pages/productlist/ProductList";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const SecondButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#f2f2f2",
    borderColor: "#f2f2f2",
    color: "#4f4f4f",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#f2f2f2",
      borderColor: "#f2f2f2",
      boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { id } = useParams();
  useEffect(() => {
    Api.getSingleItem(id)
      .then((resp) => setData(resp))
      .catch((err) => console.log(err));
  }, []);

  const addTo = () => {
    dispatch(addProduct(data));
    setCookie("products", user.product, 3);
  };

  return (
    <div>
      <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Buy now
      </BootstrapButton>

      {user.isLoggedIn ? (
        <SecondButton
          onClick={() => addTo()}
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
        >
          <AddShoppingCartIcon /> Add to cart
        </SecondButton>
      ) : (
        <SecondButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
        >
          <AddShoppingCartIcon /> Add to cart
        </SecondButton>
      )}
    </div>
  );
}
