import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SliderContainer=styled.div`
    height:calc(100vh - 100px);
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:-2rem;
`

export const SliderWrapper=styled.div`
    height:auto;
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
`

export const SlideImg = styled.img`
    height:31.25rem;
    width:auto;
    transition: height 0.5s;
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