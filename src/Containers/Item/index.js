import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../../Actions/dataAction'
import {addToCart} from '../../Actions/cartAction'
import Loading from '../../Components/Loading'
import { 
    ItemContainer,
    ItemWrapper,
    ItemInfo,
    ItemImg,
    ItemDescription,
    ItemPrice,
    BtnWrapper,
    Button,
 } from './ItemElements';

const Item = (props) => {
    useEffect(()=>{
        props.fetchSingleProduct('https://www.amiiboapi.com/api/amiibo?id='+props.match.params.id);
    },[])

    const addCart = () =>{
        props.addToCart(
            (props.data.singleProduct.head+props.data.singleProduct.tail),
            props.data.singleProduct.image,
            props.data.singleProduct.name,
        )
    }
    if(props.data.pending===true){return <Loading></Loading>}
    return (
        <ItemContainer>
            <ItemWrapper>
                <ItemInfo>
                    <ItemImg src={props.data.singleProduct.image}></ItemImg>
                    <ItemDescription>TestItem</ItemDescription>
                    <ItemPrice>29.99</ItemPrice>
                    <BtnWrapper>
                        <Button onClick={addCart}>Add to Cart</Button>
                    </BtnWrapper>
                </ItemInfo>
            </ItemWrapper>
        </ItemContainer>
    )
}

const mapStateToProps = state =>{
    return{
        data:state.dataReducer,
        cart:state.cartReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        fetchSingleProduct:(url)=>{
            dispatch(fetchSingleProduct(url));
        },
        addToCart:(id,image,name)=>{
            dispatch(addToCart(id,image,name));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);