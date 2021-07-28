import React from "react";
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

const App = () => {
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
