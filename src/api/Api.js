import {serializeProductList} from './../serializeProductList';
import { serializeSingleProduct } from './../serializeProductList';

const Api = {
    baseUrl:'https://fakestoreapi.com/',

    getData:(url,params,method='get') => {
        return fetch(Api.baseUrl + url,
            {
                method:method.toUpperCase,
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(params)
            })
    },

    getProductList: function () {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                return serializeProductList(json);
            })
    },

    getSingleItem: (id) => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(el => {
            return serializeSingleProduct(el);
        })
    },

    signInApi : (email,password) => {
    
        return fetch("http://159.65.126.180/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
    },
    signUpApi : (name,email,password,password_confirmation) => {

        console.log(name,email,password,password_confirmation);
        return fetch("http://159.65.126.180/api/register", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
              password_confirmation: password_confirmation,
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })

    },

    getFilteredList: (limit) => {

        return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => {
                return serializeProductList(json);
            })
    },

    getPages: (p) => {

        return fetch(`https://fakestoreapi.com/products?page` + p)
            .then(res => res.json())
            .then(json => {
                return serializeProductList(json);
            })
    },
}

export default Api;