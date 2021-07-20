import React from 'react'
import Home from "./pages/Home";
import ScrollToTop from './components/ScrollToTop';
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'
import AdminPanel from './pages/AdminPanel';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { HOMEPAGE,SIGNIN,PRODUCT_LIST,SINGLE_LIST,ADMIN,SIGNUP } from "./routes";



const App = () => {

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path={PRODUCT_LIST} component={ProductList} />
                <Route path={SINGLE_LIST} component={SingleProduct} />
                <Route path={ADMIN} component={AdminPanel} />
                <Route path={SIGNIN} component={SignIn} />
                <Route path={SIGNUP} component={SignUp} />
                <Route path={HOMEPAGE} component={Home} />
            </Switch>
        </Router>
    )
}

export default App;