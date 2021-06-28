import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryContainer=styled.div`
    height:80px;
    width:100vw;
    display:flex;
    justify-content: center;
    text-align:center;
    flex-direction: column;
    align-items: center;
`

export const CategoryHeading=styled.h3`
    font-size:24px;
    font-weight:400;
`

export const CategoryWrapper=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
`

export const CategoryLink = styled(Link)`
    height:40px;
    text-decoration:none;
    width:auto;
    padding:10px 40px;
    color:black;
    font-weight:300;
    text-align:center;
    transition:color 0.3s , font-size 0.3s;

    &:hover{
        color:red;
        font-size: 20px;
    }

`

export const CategoryWord=styled.div`

`