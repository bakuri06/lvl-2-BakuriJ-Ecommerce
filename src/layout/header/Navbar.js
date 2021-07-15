import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import './style.css'
import { useState } from 'react';
import Flag from './Flag';
import {Link as MLink} from "@material-ui/core"
import {Link} from "react-router-dom";
import { HOMEPAGE } from '../../routes';
import { PRODUCT_LIST } from '../../routes';
import { SINGLE_LIST } from '../../routes';
import { ADMIN } from '../../routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    zIndex: '99999',
    transition: '0.6s'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },
  paint: {
    backgroundColor: '#fff',
    transition: '0.6s'
  },
  button: {
    color: 'black',
    borderColor: 'black',
    borderRadius: 16
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={classes.root}>
      <AppBar className={navbar ? classes.paint : classes.root} color='transparent' position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
          </Typography>
          <i className="fas fa-bars"></i>

          <ul className='flexed'>
            <li>
              <MLink component={Link} to={HOMEPAGE}>Home</MLink>
              <MLink component={Link} to={PRODUCT_LIST}>List</MLink>
              <MLink component={Link} to={SINGLE_LIST}>Single</MLink>
              <MLink component={Link} to={ADMIN}>Admin</MLink>
            </li>
            <li>
              <a href="#!">
                <span className='badge badge-pill'>1</span>
                <i className="fas fa-shopping-cart pl-0"></i>
              </a>
            </li>
            <li>
              <Flag />
            </li>
            <li >
              <a href="#!">
                Shop
              </a>
            </li>
            <li >
              <a href="#!">
                Contact
              </a>
            </li>
            <li>
              <a href="#!">
                Sign in
              </a>
            </li>
            <li >
              <Button variant='outlined' className={classes.button}>
                Sign Up
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
