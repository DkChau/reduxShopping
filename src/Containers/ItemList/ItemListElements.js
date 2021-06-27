import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ListContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:calc(100vh - 80px);
`

export const ListWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`

export const ListItem=styled.ul`
    display:flex;
    height:auto;
    width:auto;

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