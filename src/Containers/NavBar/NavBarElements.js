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
    justify-content: space-between;
    align-items: center;
`

export const LinkWrapper=styled.div`
    width:50%;
    height:auto;
`

export const LogoWrapper=styled.div`
    width:auto;
    height:auto;
`
export const LinkLogo = styled.img`
    height:45px;
    padding-left: 40px;
    width:auto;
`
export const LinkItem=styled(Link)`
    text-decoration:none;
    color:black;
    font-size:24px;
    font-weight:400;
    
`

export const MobileIcon=styled.div`
    display:none;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    padding-right: 40px;
    color:black;

    @media screen and (max-width:768px){
        display:flex;
    }
`

export const RouteLinks = styled.div`
    display:flex;
    width:50%;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width:768px){
        display:none;
    }
`