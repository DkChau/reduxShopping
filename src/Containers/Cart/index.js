import React from 'react'
import {connect} from 'react-redux';
import uniqid from 'uniqid';
import { removeFromCart,changeQuantity } from '../../Actions/cartAction';
import { 
    CartContainer,
    CartWrapper,
    CartItem,
    ItemImg,
    ItemQuantity,
    ItemPrice,
    BtnWrapper,
    DeleteBtn,
    CartFooter,
    CartTotal
} from './CartElements';

const Cart = (props) => {

    const remCart = (e)=>{
        props.removeFromCart(e.target.parentNode.parentNode.id);
    }
    
    const handleChange = (e) =>{
        props.changeQuantity(e.target.parentNode.id,e.target.value);
    }

    if(props.cart.cart.length===0){return ( <div> empty </div>)}
    return (
        <CartContainer>
            <CartWrapper>
                {props.cart.cart.map(item=>{
                    return (
                    <CartItem key={uniqid()} id={item.id}> 
                        <ItemImg src={item.image}></ItemImg>
                        <ItemQuantity onChange={handleChange} type='number' min='1' value={item.quantity}></ItemQuantity>
                        <ItemPrice>{item.price * item.quantity}</ItemPrice>
                        <BtnWrapper>
                            <DeleteBtn onClick={remCart}>Delete From Cart</DeleteBtn>
                        </BtnWrapper>
                    </CartItem>
                    )
                })}
            </CartWrapper>
            <CartFooter>
                <CartTotal>{props.cart.total}</CartTotal>
            </CartFooter>
        </CartContainer>
    )
}
const mapStateToProps = state =>{
    return{
        cart:state.cartReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        removeFromCart:(id)=>{
            dispatch(removeFromCart(id))
        },
        changeQuantity:(id,num)=>{
            dispatch(changeQuantity(id,num))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

