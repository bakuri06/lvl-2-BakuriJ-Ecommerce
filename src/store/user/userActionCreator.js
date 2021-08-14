import { SET_TOKEN, SET_USER,SET_LOGININ,SET_LOGED,ADD_CART, ADD_PRODUCT,SET_IMAGE} from './userConsts';

export const setUser = (user) => {
    return {
        type:SET_USER,
        user
    }
}

export const setToken = (token) => {
    return {
        type:SET_TOKEN,
        token
    }
}


export const setLogin = (boolean) => {
    return {
        type:SET_LOGED,
        isLoggedIn:boolean
    }
}

export const setLoginIn = (boolean) => {
    return {
        type:SET_LOGININ,
        isLoggingIn:boolean
    }
}

export const addProduct = (data) => {
    return {
        type:ADD_PRODUCT,
        product:data
    }
}

export function addToCart (counter) {
    return {
        type:ADD_CART,
        counter: counter
    }
}