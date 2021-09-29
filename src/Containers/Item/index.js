import React, {useEffect,useRef, useState} from 'react'
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../../Actions/dataAction'
import {addToCart} from '../../Actions/cartAction'
import Loading from '../../Components/Loading'
import { 
    ItemContainer,
    ItemWrapper,
    ItemImg,
    ItemName,
    ItemPrice,
    BtnWrapper,
    Button,
    ItemSeries,
    LinkWrapper,
    ImageWrapper,
    InfoWrapper,
 } from './ItemElements';

const Item = (props) => {

    const buttonRef=useRef(null);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(()=>{
        props.fetchSingleProduct('https://www.amiiboapi.com/api/amiibo/?id='+props.match.params.id);
    },[])

    const addCart = () =>{
        props.addToCart(
            (props.data.singleProduct.head+props.data.singleProduct.tail),
            props.data.singleProduct.image,
            props.data.singleProduct.name,
        )
        buttonRef.current.className='';
        setShowBtn(true);
    }
    if(props.data.pending===true){return <Loading></Loading>}
    return (
        <ItemContainer>
            <ItemWrapper>
                <ImageWrapper>
                    <ItemImg src={props.data.singleProduct.image}></ItemImg>
                </ImageWrapper>
                <InfoWrapper>
                    <ItemName>{props.data.singleProduct.name}</ItemName>
                    <ItemSeries>Game Series: {props.data.singleProduct.gameSeries}</ItemSeries>
                    <ItemPrice>Price: 29.99</ItemPrice>
                    <BtnWrapper>
                        <Button onClick={addCart}>Add to Cart</Button>
                        <LinkWrapper to='/cart' ref={buttonRef} className='hidden'>
                            {showBtn?<Button>Proceed to Cart</Button>:<></>}
                        </LinkWrapper>
                    </BtnWrapper>
                </InfoWrapper>
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