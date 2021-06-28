import React, {useEffect,useRef} from 'react'
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../../Actions/dataAction'
import {addToCart} from '../../Actions/cartAction'
import Loading from '../../Components/Loading'
import { 
    ItemContainer,
    ItemWrapper,
    ItemInfo,
    ItemImg,
    ItemName,
    ItemPrice,
    BtnWrapper,
    Button,
    ItemSeries,
    DateWrapper,
    Dates,
    ButtonLink,
 } from './ItemElements';

const Item = (props) => {

    const buttonRef=useRef(null);

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
    }
    if(props.data.pending===true){return <Loading></Loading>}
    return (
        <ItemContainer>
            <ItemWrapper>
                <ItemInfo>
                    <ItemImg src={props.data.singleProduct.image}></ItemImg>
                    <ItemName>Character Name: {props.data.singleProduct.name}</ItemName>
                    <ItemSeries>Game Series: {props.data.singleProduct.name}</ItemSeries>
                    <ItemPrice>Price: 29.99</ItemPrice>
                    {/* <DateWrapper>
                        <Dates>EU Release Date: {props.data.singleProduct.release.eu===null ? 'N/A' : props.data.singleProduct.release.eu}</Dates>
                        <Dates>NA Release Date: {props.data.singleProduct.release.na===null ? 'N/A' : props.data.singleProduct.release.na}</Dates>
                        <Dates>JP Release Date: {props.data.singleProduct.release.jp==undefined ? 'N/A' : props.data.singleProduct.release.jp}</Dates>
                    </DateWrapper> */}
                    <BtnWrapper>
                        <Button onClick={addCart}>Add to Cart</Button>
                        <ButtonLink to='/cart' ref={buttonRef} className='hidden'>Proceed to Cart</ButtonLink>
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