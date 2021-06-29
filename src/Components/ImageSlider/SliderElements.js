import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SliderContainer=styled.div`
    height:auto;
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

export const SlideImg = styled.img`
    height:500px;
    width:auto;

    &.active{

    }
    &.hidden{
        display:none;
    }
`

export const LinkWrapper = styled(Link)`
    display:flex;
    justify-content: center;
    align-items: center;
`

export const ShopLink=styled.p`
    color:red;
`