const initialState={
    cart:[],
    total:0,
    itemQuantity:0,
}
const cartReducer = (state=initialState,action) =>{
    let tempCart = [...state.cart];
    let tempTotal = state.total;
    let tempQuantity=state.itemQuantity;
    let itemInCart=false;
    let index=0;
    let diff=0;
    switch (action.type) {
        case 'ADD_TO_CART':
            for(let i=0; i<tempCart.length; i++){
                if(tempCart[i].id===action.payload.id){
                    tempCart[i].quantity=tempCart[i].quantity+1;
                    itemInCart=true;
                    tempTotal=tempTotal+29.99;
                    tempQuantity=tempQuantity+1;
                }
            }
            if(itemInCart===false){
                tempCart.push({
                    id:action.payload.id,
                    image:action.payload.image,
                    name:action.payload.name,
                    price:29.99,
                    quantity:1,
                })
                tempTotal=tempTotal+29.99;
                tempQuantity=tempQuantity+1;
            }
            return {
                ...state,
                total:tempTotal,
                cart:tempCart,
                itemQuantity:tempQuantity,
            }
        case 'REMOVE_FROM_CART':
            for(let i=0; i<tempCart.length; i++){
                if(tempCart[i].id===action.payload){
                    index=i;
                    tempTotal=tempTotal-tempCart[i].quantity*29.99;
                    tempQuantity=tempQuantity-tempCart[i].quantity;
                    break;
                }
            }
            tempCart.splice(index,1);
            return {
                ...state,
                total:tempTotal,
                cart:tempCart,
                itemQuantity:tempQuantity,
            }
        case 'CHANGE_QUANTITY':
            for(let i=0; i<tempCart.length; i++){
                if(tempCart[i].id===action.payload.id){
                    diff=action.payload.num-tempCart[i].quantity;
                    tempCart[i].quantity=action.payload.num;
                    tempTotal=tempTotal+(diff*29.99);
                    tempQuantity=tempQuantity+diff;
                    break;
                }
            }
            return {
                ...state,
                total:tempTotal,
                cart:tempCart,
                itemQuantity:tempQuantity,
            }
        default:
            return state;
    }
    
}

export default cartReducer;