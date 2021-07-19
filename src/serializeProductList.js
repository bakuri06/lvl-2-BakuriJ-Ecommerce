export  function serializeProductList(data){
    return data.map(el => {
        return {
            title:el.title,
            price:el.price,
            img:el.image,
            id:el.id,
            description:el.description
        }
    })
}

export function serializeSingleProduct(el){
    return {
        title: el.title,
        price: el.price,
        img: el.image,
        id: el.id,
        description: el.description
    }
}