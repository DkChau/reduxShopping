export function addToCart(id,image,name){
    return {
        type:'ADD_TO_CART',
        payload:{
            id,image,name
        }
    }
}

export function removeFromCart(id){
    return{
        type:'REMOVE_FROM_CART',
        payload:id
    }
}

export function changeQuantity(id,num){
    return {
        type:'CHANGE_QUANTITY',
        payload:{
            id,num
        },
    }
}