import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ItemContainer=styled.div`
    display:flex;
    width:100%;
    height:calc(100vh - 100px);
`
export const ImageWrapper = styled.div`
    /* border:1px solid black; */
    margin:20px;
    padding:40px;
    border-radius:50px;
    box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
`
export const ItemImg=styled.img`
    height:300px;
`
export const InfoWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ItemName=styled.h2`
    font-weight:400;
    margin:0;
    margin-bottom:10px;
    padding:0;
    font-size: 1.7rem;
`

export const ItemSeries = styled.h3`
    font-weight:300;
    margin:0;
    margin-bottom:10px;
    padding:0;
    font-size: 1.2rem;
`

export const ItemPrice = styled.h4`
    font-weight:300;
    margin:0;
    margin-bottom:10px;
    padding:0;
`   

export const BtnWrapper = styled.div`
    display:flex;
    height:auto;
    width:auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

export const Button=styled.button`
    border:1px solid black;
    background:none;
    width:125px;
    cursor:pointer;
`

export const LinkWrapper = styled(Link)`

`
export const ButtonLink=styled.button`
    border:none;
    background:none;
    border:1px solid black;
    width:125px;
    cursor:pointer;
`
export const ItemWrapper = styled.div`
    display:flex;
    width:50%;
    height:100%;
    border-radius: 50px;
    justify-content: space-around;
    align-items: center;
    margin:0 auto;
    

    &:hover{
    }
`

