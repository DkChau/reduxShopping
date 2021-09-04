import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Background from '../../Images/Background.png';

export const NavContainer=styled.div`
    display:flex;
    width:100%;
    height:100px;
    position:sticky;
    background-image: url(${Background});
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`
export const NavLinks=styled.nav`
    width:90%;
    height:100%;
    display:grid;
    grid-template-columns: 400px 400px;
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
`
// export const LogoWrapper=styled.div`
//     display:flex;
//     justify-content: center;
//     align-items:center;
//     width:100%;
//     height:100%;
// `
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
export const LinkItem=styled.span`
    font-size:1.5rem;
    font-weight:300;

    
`
export const LinkLogo = styled.img`
    width:200px;
    height:auto;
    max-width:200px;
`
export const RouteLinks = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

`