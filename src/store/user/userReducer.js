import {
  SET_TOKEN,
  SET_USER,
  SET_LOGED,
  SET_LOGININ,
  ADD_CART,
  ADD_PRODUCT,
} from "./userConsts";

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: {},
  counter: 0,
  product: [],
  token: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_LOGED:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };

    case ADD_CART:
      return {
        ...state,
        counter: action.counter,
      };

    case SET_LOGININ:
      return {
        ...state,
        isLoggingIn: action.isLoggingIn,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.product],
      };
    default:
      return state;
  }
}
