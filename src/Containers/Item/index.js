import React, {useEffect,useRef, useState} from 'react'
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../../Actions/dataAction'
import {addToCart} from '../../Actions/cartAction'
import Loading from '../../Components/Loading'
import {AiOutlinePlus} from 'react-icons/ai';
import {RiShoppingCartLine} from 'react-icons/ri';
import { 
    ItemContainer,
    ItemWrapper,
    ItemImg,
    ItemName,
    ItemPrice,
    BtnWrapper,
    ItemSeries,
    ImageWrapper,
    InfoWrapper,
    Button,
    ButtonSet,
    TextWrapper,
    IconWrapper,
    Text,
    LinkWrapper,
 } from './ItemElements';

const Item = (props) => {

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
                        <Button onClick={addCart}>
                            <ButtonSet>
                                <TextWrapper>
                                    <Text>Add to Cart</Text>
                                </TextWrapper>
                                <IconWrapper>
                                    <AiOutlinePlus/>
                                </IconWrapper>
                            </ButtonSet>
                        </Button>
                        <Button className={showBtn ? 'active' : 'hidden'}>
                            <LinkWrapper to='/cart'>
                                <ButtonSet>
                                    <TextWrapper>
                                        <Text>Go to Cart</Text>
                                    </TextWrapper>
                                    <IconWrapper>
                                        <RiShoppingCartLine/>
                                    </IconWrapper>
                                </ButtonSet>
                            </LinkWrapper>
                        </Button>
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