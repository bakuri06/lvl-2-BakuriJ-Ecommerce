import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let middleware = [thunkMiddleware];

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store