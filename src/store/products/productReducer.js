import { ADD_PRODUCTS, SET_PRODUCTS } from "./productConsts";

const initialState = {
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
}
