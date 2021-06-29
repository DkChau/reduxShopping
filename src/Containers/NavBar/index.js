import React from 'react'
import Logo from '../../Images/Logo.png'
import {FaBars} from 'react-icons/fa';
import { 
    NavContainer,
    NavWrapper,
    NavLinks,
    LinkWrapper,
    LinkItem,
    LinkLogo,
    MobileIcon,
    RouteLinks,
    LogoWrapper
 } from './NavBarElements'

const NavBar = (props) => {

    return (
        <NavContainer>
            <NavWrapper>
                <NavLinks>
                    <LogoWrapper>
                        <LinkItem to='/'>
                            <LinkLogo src={Logo}></LinkLogo>
                        </LinkItem>
                    </LogoWrapper>
                    <MobileIcon>
                        <FaBars onClick={props.toggleDrag}></FaBars>
                    </MobileIcon>
                    <RouteLinks>
                        <LinkWrapper>
                            <LinkItem to='/shop'>Shop</LinkItem>
                        </LinkWrapper>
                        <LinkWrapper>
                            <LinkItem to='/Cart'>Cart</LinkItem>
                        </LinkWrapper>
                    </RouteLinks>
                </NavLinks>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar