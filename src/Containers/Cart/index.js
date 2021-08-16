import React from 'react'
import {connect} from 'react-redux';
import uniqid from 'uniqid';
import { removeFromCart,changeQuantity } from '../../Actions/cartAction';
import EmptyPage from '../EmptyPage';
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
    CartTotal,
    ItemDescription,
    ItemName,
    CartTagItem,
    CartTagPrice,
    CartHeading,
    CartMsg,
    CartBtnWrapper,
    CartBtn
} from './CartElements';

const Cart = (props) => {

    const remCart = (e)=>{
        props.removeFromCart(e.target.parentNode.parentNode.id);
    }
    
    const handleChange = (e) =>{
        e.preventDefault();
        props.changeQuantity(e.target.parentNode.id,e.target.value);
    }

    if(props.cart.cart.length===0){return ( <EmptyPage/> ) }
    return (
        <CartContainer>
            <CartWrapper>
                <CartHeading>
                    <CartTagItem>Item</CartTagItem>
                    <CartTagPrice>Price</CartTagPrice>
                </CartHeading>
                {props.cart.cart.map((item,index)=>{
                    return (
                    <CartItem key={'cartItem'+index} > 
                        <ItemImg src={item.image}></ItemImg>
                        <ItemDescription id={item.id}>
                            <ItemName>{item.name + " Amiibo"}</ItemName>
                            <ItemQuantity onChange={handleChange} type='number' min='1' value={item.quantity}></ItemQuantity>
                            <BtnWrapper>
                                <DeleteBtn onClick={remCart}>Delete From Cart</DeleteBtn>
                            </BtnWrapper>
                        </ItemDescription>
                        <ItemPrice>{(item.price * item.quantity).toFixed(2)}</ItemPrice>
                    </CartItem>
                    )
                })}
            </CartWrapper>
            <CartFooter>
                <CartTotal>{'Cart Total: ' +props.cart.total.toFixed(2)}</CartTotal>
                <CartBtnWrapper>
                    <CartBtn>Check out</CartBtn>
                </CartBtnWrapper>
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

