import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/ScrollToTop";
import ProductList from "./pages/productlist/ProductList";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import AdminPanel from "./pages/admin/AdminPanel";
import ShoppingCart from "./pages/shopingcart/ShopingCart";
import { PrivateRoute } from "./components/PrivateRoute";
import Api from "./api/Api";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HOMEPAGE,
  SIGNIN,
  PRODUCT_LIST,
  SINGLE_LIST,
  ADMIN,
  SIGNUP,
  SHOPPINGCART,
} from "./routes";

import { useDispatch } from "react-redux";
import { selectUser } from "./store/user/userSelector";
import { setLoginIn,setLogin,setUser } from "./store/user/userActionCreator";


const token = localStorage.getItem("token");

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    isTokenAllowed();
  }, []);

  const user = useSelector(selectUser);

  const isTokenAllowed = () => {
    if (token) {
      Api.getMe(token)
        .then((json) => {
          console.log(json)
          dispatch(setLoginIn(false));
          dispatch(setLogin(true));
          dispatch(setUser(json));
        })
        .catch((err) => {
          console.log("Caught it: ", err);
        });
    } else {
      console.log("Token isn't valid");
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={PRODUCT_LIST} component={ProductList} />
        <Route path={SINGLE_LIST} component={SingleProduct} />
        <PrivateRoute path={ADMIN} component={AdminPanel} />
        <Route path={SIGNUP} component={SignUp} />
        <Route path={SIGNIN} component={SignIn} />
        <PrivateRoute path={SHOPPINGCART} component={ShoppingCart} />
        <Route path={HOMEPAGE} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
