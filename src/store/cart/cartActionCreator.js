import { SET_CART, SET_INCR,SET_DECR,REMOVE_QUANT } from "./cartConsts";
import { useState } from "react";

export function setCart(data,counter) {
  return {
    type: SET_CART,
    cart: data,
    quantity:counter
  };
}



export const increment = () => {
  return {
    type: SET_INCR,
  };
};

export const removeQuantity = () => {
  return {
    type: REMOVE_QUANT,
  };
};


export const decrement = () => {
  return {
    type: SET_DECR,
  };
};
