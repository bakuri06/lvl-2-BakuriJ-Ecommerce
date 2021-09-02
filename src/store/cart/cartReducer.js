import {
  SET_CART,
  SET_INCR,
  SET_DECR,
  REMOVE_QUANT,
} from "./cartConsts";

const initialState = {
  products: [],
  quantity: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        products: [
          ...state.products,
          {
            cart: action.cart,
            quant: state.quantity,
            totalPrice: state.quantity * action.cart.price,
          },
        ],
      };

    case REMOVE_QUANT:
      return {
        ...state,
        quantity: 0,
      };

    case SET_INCR:
      return {
        ...state,
        quantity: state.quantity + 1,
      };

    case SET_DECR:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    default:
      return state;
  }
}
