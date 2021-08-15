import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryContainer=styled.div`
    height:auto;
    width:100%;
    position:absolute;
    bottom:-402px;
    overflow:auto;
    display:flex;
    border:1px solid black;
    border-top:0;
    justify-content: center;
    background:white;
    text-align:center;
    flex-direction: column;
    align-items: center;
    

    @media screen and (max-width:768px){
        display:none;
    }
`

export const CategoryHeading=styled.h3`
    font-size:24px;
    font-weight:400;
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
    padding:0 10px;
    font-size:20px;
    color:black;
    font-weight:300;
    text-align:center;
    transition:color 0.3s , font-size 0.3s;

    &:hover{
        color:red;
        font-size: 21px;
    }

    @media (max-width:1060px){
        font-size:16px;

        &:hover{
        color:red;
        font-size: 17px;
        }
    }

    @media (max-width:850px){
        font-size:14px;

        &:hover{
        color:red;
        font-size: 15px;
        }
    }


`

export const CategoryWord=styled.div`

`