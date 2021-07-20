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

    getFilteredList: (limit) => {

        return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => {
                return serializeProductList(json);
            })
    },
}

export default Api;