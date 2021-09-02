import user from "./user/userReducer";
import products from "./products/productReducer";
import cart from './cart/cartReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user,
    products,
    cart

})

export default rootReducer
