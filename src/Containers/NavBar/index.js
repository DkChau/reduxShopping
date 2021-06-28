import React from 'react'
import Logo from '../../Images/Logo.png'
import { 
    NavContainer,
    NavWrapper,
    NavLinks,
    LinkWrapper,
    LinkItem,
    LinkLogo,
 } from './NavBarElements'

const NavBar = () => {

    return (
        <NavContainer>
            <NavWrapper>
                <NavLinks>
                    <LinkWrapper>
                        <LinkItem to='/'>
                            <LinkLogo src={Logo}></LinkLogo>
                        </LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/shop'>Shop</LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/Cart'>Cart</LinkItem>
                    </LinkWrapper>
                </NavLinks>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar