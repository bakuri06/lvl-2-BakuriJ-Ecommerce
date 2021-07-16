const Api = {

    getProductList: function () {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                return json.map(el => {
                    return {
                        title: el.title,
                        price: el.price,
                        img: el.image,
                        id: el.id,
                        description: el.description
                    }
                })
            })
    },

    getSingleItem: (id) => {
        return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(el => {
            console.log(el);
            return ({
                title: el.title,
                price: el.price,
                img: el.image,
                id: el.id,
                description: el.description
            }
            )
        })
    }
}

export default Api;