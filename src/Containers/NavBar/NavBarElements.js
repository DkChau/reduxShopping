import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Background from '../../Images/Background.png';

export const NavContainer=styled.div`
    display:flex;
    width:100vw;
    background-image: url(${Background});
    height:auto;
    position:sticky;
    top:0;
    justify-content: center;
    align-items: center;
`

export const NavWrapper=styled.div`
    display:flex;
    flex-direction: column;

`

export const NavLinks=styled.nav`
    width:100vw;
    height:80px;
    color:white;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const LinkWrapper=styled.div`
    width:auto;
    height:auto;
`
export const LinkLogo = styled.img`
    height:40px;
    width:auto;
`
export const LinkItem=styled(Link)`
    text-decoration:none;
    color:black;
    font-size:24px;
    font-weight:400;
    
`