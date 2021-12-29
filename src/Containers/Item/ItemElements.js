import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ItemContainer=styled.div`
    display:flex;
    width:100%;
    height:calc(100vh - 100px);
`
export const ItemWrapper = styled.div`
    display:flex;
    width:70%;
    height:100%;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin:0 auto;
`
export const ImageWrapper = styled.div`
    /* border:1px solid black; */
    padding:40px;
    border-radius:50px;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
`
export const ItemImg=styled.img`
    height:25rem;
`
export const InfoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0 7rem;
`
export const ItemName=styled.h2`
    font-weight:400;
    margin:0;
    margin-bottom:10px;
    padding:0;
    font-size: 2rem;
`

export const ItemSeries = styled.h3`
    font-weight:300;
    margin:0;
    margin-bottom:10px;
    padding:0;
    font-size: 1.4rem;
`

export const ItemPrice = styled.h4`
    font-weight:300;
    margin:0;
    margin-bottom:10px;
    padding:0;
    font-size:1.2rem;
`   

export const BtnWrapper = styled.div`
    display:grid;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    grid-template-rows: 1fr 1fr;
    grid-gap:8px;
    margin-top: 20px;
`
export const LinkWrapper = styled(Link)`
    text-decoration:none;
    color:black;
`
export const ButtonSet = styled.span`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 32px 32px;
    transition:transform 0.3s ease;
`
export const TextWrapper = styled.span`
    text-align:center;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;

`
export const Text = styled.span`
    display:flex;
`
export const IconWrapper = styled.span`
    display:flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    font-size:20px;
`
export const Button = styled.div`
    border:1px solid black;
    padding:0 10px;
    height:32px;
    width:150px;
    overflow-y:hidden;
    cursor:pointer;

    &:hover{
        ${ButtonSet}{
            transform:translateY(-32px);
        }
    }

    &.active{
        display:block;
    }

    &.hidden{
        display:none;
    }
`