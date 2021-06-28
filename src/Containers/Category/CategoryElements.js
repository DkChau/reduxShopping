import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryContainer = styled.div`
    display:flex;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100vw;
    height:auto;
`

export const CategoryWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`

export const CategoryItem=styled.ul`
    display:flex;
    height:auto;
    width:auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`

export const Item=styled(Link)`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin:10px;
    width:300px;
    height:290px;
    padding-top: 20px;
    border:1px solid black;
    text-decoration:none;
    transition: width 0.3s, height 0.3s;

    &:hover{
        width:320px;
        height:300px;
    }
`

export const ItemImg=styled.img`
    height:200px;
    width:auto;
`

export const ItemDescription=styled.p`
    color:red;
`

export const ItemPrice=styled.p`
    color:green;
`