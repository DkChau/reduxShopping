import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchProducts} from '../../Actions/dataAction'
import { 
    HomeContainer,
    HomeWrapper,
    HomeLinks,
    LinkWrapper,
    LinkItem,
 } from './HomeElements'

const Home = (props) => {

    useEffect(()=>{
        props.fetchProducts();
    },[])

    return (
        <HomeContainer>
            <HomeWrapper>
                <HomeLinks>
                    <LinkWrapper>
                        <LinkItem to='/'>Hello</LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/'>Test</LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/'>Test123</LinkItem>
                    </LinkWrapper>
                </HomeLinks>
            </HomeWrapper>
        </HomeContainer>
    )
}

const mapStateToProps = state =>{
    return{
        products:state.dataReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{ 
        fetchProducts:()=>{
            dispatch(fetchProducts());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);