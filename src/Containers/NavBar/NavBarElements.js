import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavContainer=styled.div`
    display:flex;
    width:100%;
    height:100px;
    position:sticky;
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    background:white;
`
export const NavLinks=styled.nav`
    width:90%;
    height:100%;
    display:grid;
    grid-template-columns: 25rem 25rem;
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
`
export const LinkItem=styled.span`
    font-size:2rem;
    font-weight:300;
    padding:5px 0;

    transition:all 0.3s ease;

    &:hover{
        transform:scale(1.06);
    }
`
export const LinkWrapper=styled(Link)`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    width:100%;
    height:100%;
    position:relative;
    color:black;
    text-decoration:none;
`
export const LinkLogo = styled.img`
    width:12.5rem;
    height:auto;
    max-width:12.5rem;
`
export const RouteLinks = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

`