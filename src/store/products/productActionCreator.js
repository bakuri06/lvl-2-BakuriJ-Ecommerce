import { ADD_PRODUCTS, SET_PRODUCTS } from "./productConsts"

export const setProducts = (products) => {
    return {
        type:SET_PRODUCTS,
        products
    }
}
