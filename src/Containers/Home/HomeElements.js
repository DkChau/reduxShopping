import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeContainer=styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    justify-content: center;
    align-items: center;
`

export const HomeWrapper=styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    height: 100%;

`

export const HomeLinks=styled.nav`
    width:100vw;
    height:80px;
    background:black;
    color:white;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const LinkWrapper=styled.div`
    width:auto;
    height:auto;
`

export const LinkItem=styled(Link)`
    text-decoration:none;
    color:white;
`