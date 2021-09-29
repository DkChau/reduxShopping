import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryContainer=styled.div`
    width:100%;
    position:absolute;
    bottom:-400px;
    display:flex;
    border:1px solid black;
    border-top:none;
    background:white;
    text-align:center;
    flex-direction: column;
`
export const CategoryWrapper=styled.div`
    display:flex;
    flex-direction: column;
    height:auto;
    width:auto;
`

export const CategoryLink = styled(Link)`
    height:40px;
    text-decoration:none;
    width:auto;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0 .625rem;
    font-size:1.25rem;
    color:black;
    font-weight:300;
    text-align:center;
    transition:all 0.3s;

    &:hover{
        color:red;
        font-size: 1.4rem;
    }
`

export const CategoryWord=styled.div`

`