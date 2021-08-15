import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SliderContainer=styled.div`
    height:calc(100vh - 100px);
    width:100vw;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const SliderWrapper=styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Slider = styled.div`
    height: auto;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const IconWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
    font-size: 1.5rem;
    padding-top: 100px;
    transition: font-size 0.5s, margin 0.5s;
    cursor:pointer;

    @media (max-width:992px){
        font-size:22px;
        margin: 0 -10px;
    }

    @media screen and (max-width:768px){
        font-size:18px;
        margin: 0 -20px;
    }
`

export const SlideImg = styled.img`
    height:500px;
    width:auto;
    transition: height 0.5s;

    &.active{
        @media (max-width:992px){
            height:400px;
        }
        @media screen and (max-width:768px){
            height:300px;
        }

    }
    &.hidden{
        display:none;
    }
`

export const LinkWrapper = styled(Link)`
    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration:none;
`

export const ShopLink=styled.p`
    color: black;
    font-weight:400;
    border: 1px solid black;
    padding:5px 10px;
    transition: background-color 0.2s;

    &:hover{
        background-color:#f8f8f8
    }

`