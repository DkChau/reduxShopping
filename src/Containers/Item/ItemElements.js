import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ItemContainer=styled.div`
    width:100vw;
    height:calc(100vh - 80px);
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ItemWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
`

export const ItemInfo=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    height:100%;
`

export const ItemImg=styled.img`
    height:300px;
    width:auto;
`

export const ItemName=styled.h2`
    color:black;
    font-weight: 600;
    font-size: 32px;
    margin:0;
    margin-top: 20px;
`

export const ItemSeries = styled.h3`
    color:black;
    margin:0;
`

export const ItemPrice = styled.h3`
    color:red;
    margin:20px;
`

export const BtnWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

export const Button=styled.button`

`
export const ButtonLink=styled(Link)`
    &.hidden{
        display:none;
    }
`

export const DateWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Dates= styled.div`
    color:purple;
`

