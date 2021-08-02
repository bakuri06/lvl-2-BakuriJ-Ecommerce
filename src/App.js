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

import { useContext } from "react";
import { UserContext } from "./store/UserContextProvider";

const token = localStorage.getItem("token");

const App = () => {
  useEffect(() => {
    isTokenAllowed();
  }, []);

  const userData = useContext(UserContext);

  const isTokenAllowed = () => {
    if (token) {
      Api.getMe(token)
        .then((json) => {
          console.log(json);
          userData.setData({
            ...userData.data,
            user: json,
            product:userData.data.product,
            isLoggedIn: true,
            isLoggingIn: false,
          });
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
