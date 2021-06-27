import React from 'react'
import { 
    NavContainer,
    NavWrapper,
    NavLinks,
    LinkWrapper,
    LinkItem,
 } from './NavBarElements'

const NavBar = () => {

    return (
        <NavContainer>
            <NavWrapper>
                <NavLinks>
                    <LinkWrapper>
                        <LinkItem to='/'>Home</LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/shop'>Shop</LinkItem>
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/'>Cart</LinkItem>
                    </LinkWrapper>
                </NavLinks>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar