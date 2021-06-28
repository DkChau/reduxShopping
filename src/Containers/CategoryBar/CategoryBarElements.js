import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CategoryContainer=styled.div`
    height:80px;
    width:100vw;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const CategoryWrapper=styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height:100%;
`

export const CategoryLink = styled(Link)`
    height:80px;
    width:100px;
`

export const CategoryWord=styled.div`
    color:red;
`