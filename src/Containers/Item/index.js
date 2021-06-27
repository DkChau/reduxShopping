import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchSingleProduct} from '../../Actions/dataAction'
import { 
    ItemContainer,
    ItemWrapper,
    ItemInfo,
    ItemImg,
    ItemDescription,
    ItemPrice,
 } from './ItemElements';

const Item = (props) => {
    useEffect(()=>{
        props.fetchSingleProduct('https://www.amiiboapi.com/api/amiibo?id='+props.match.params.id);
    },[])

    return (
        <ItemContainer>
            <ItemWrapper>
                <ItemInfo>
                    <ItemImg src={props.data.singleProduct.image}></ItemImg>
                    <ItemDescription>TestItem</ItemDescription>
                    <ItemPrice>29.99</ItemPrice>
                </ItemInfo>
            </ItemWrapper>
        </ItemContainer>
    )
}

const mapStateToProps = state =>{
    return{
        data:state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        fetchSingleProduct:(url)=>{
            dispatch(fetchSingleProduct(url));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);