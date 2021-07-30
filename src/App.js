import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/ScrollToTop";
import ProductList from "./pages/productlist/ProductList";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import AdminPanel from "./pages/admin/AdminPanel";
import { PrivateRoute } from "./PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HOMEPAGE,
  SIGNIN,
  PRODUCT_LIST,
  SINGLE_LIST,
  ADMIN,
  SIGNUP,
} from "./routes";

let token = localStorage.getItem("token");
console.log(token);

const App = () => {
  useEffect(() => {
    isTokenAllowed();
  }, []);

  const isTokenAllowed = () => {
    if (token) {
      fetch("http://159.65.126.180/api/auth/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            resp.text().then((text) => {
              throw Error(text);
              localStorage.removeItem('token');
            });
          } else {
            return resp.json();
          }
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
        <Route path={HOMEPAGE} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
