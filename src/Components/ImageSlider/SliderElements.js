import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

const reveal = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`

export const SliderContainer=styled.div`
    height:calc(100vh - 100px);
    width:100%;
    display:flex;
    justify-content: center;
    position:absolute;
    top:50px;
    left:0;
    z-index:-1;
    align-items: center;
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
    font-size: 1.8rem;
    padding-top: 100px;
    cursor:pointer;
`

export const SlideImg = styled.img`
    height:31.25rem;
    width:auto;
    animation:${reveal} 0.7s ease-in-out;

    &.hidden{
        display:none;
    }
`



export const ShopLink=styled.span`
    font-weight:400;
    font-size: 1rem;
    display:block;
    align-self:center;
`
export const ArrowWrapper = styled.span`
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    width:100%;
    height:64px;
    transition:transform 0.5s ease;
    font-size:1rem;
    justify-content:center;
    align-content:center;
    text-align:center;

`
export const Arrow = styled.span`
    display:flex;
    align-self:center;
    justify-self: center;
    justify-content: center;
    font-size:32px;
`
export const LinkWrapper = styled(Link)`
    display:flex;
    border:1px solid black;
    height:32px;
    width:150px;
    text-decoration:none;
    color: #000000;
    overflow-y: hidden;

    &:hover{
        ${ArrowWrapper}{
            transform:translateY(-32px);
        }
    }
`