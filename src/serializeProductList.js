export default function serializeProductList(data){
    return JSON.map(el => {
        return {
            title:el.title,
            price:el.price,
            img:el.image,
            id:el.id,
            desciption:el.desciption
        }
    })
}