import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchProducts} from '../../Actions/dataAction'
import uniqid from 'uniqid'
import Loading from '../../Components/Loading'
import { 
    ListContainer,
    ListWrapper,
    ListItem,
    Item,
    ItemImg,
    ItemName,
    ItemSeries,
    ItemRelease,
 } from './ItemListElements';
import CategoryBar from '../CategoryBar';

const ItemList = (props) => {
    useEffect(()=>{
        if(props.data.products.length===0){
            props.fetchProducts('https://www.amiiboapi.com/api/amiibo?type=figure');
        }
    },[])

    if(props.data.pending===true){return <Loading></Loading>}
    
    return (
        <ListContainer>
            <CategoryBar/>
            <ListWrapper>
                <ListItem>
                    {props.data.products.map(item=>{
                        return (
                            <Item key={uniqid()}to={'item/'+item.head+item.tail}>
                                <ItemImg src={item.image}></ItemImg>
                                <ItemName>{item.name}</ItemName>
                                <ItemSeries>{item.gameSeries}</ItemSeries>
                                {/* <ItemRelease>{item.release.jp}</ItemRelease> */}
                            </Item>
                        )
                    })}
                </ListItem>
            </ListWrapper>
        </ListContainer>

    )
}
const mapStateToProps = state =>{
    return{
        data:state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        fetchProducts:(url)=>{
            dispatch(fetchProducts(url));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemList);