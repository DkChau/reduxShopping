import React, {useState} from 'react'
import Logo from '../../Images/Logo.png'
import CategoryBar from '../CategoryBar'
import { 
    NavContainer,
    NavLinks,
    LinkWrapper,
    LinkItem,
    LinkLogo,
    RouteLinks,
    Menu
 } from './NavBarElements'

const NavBar = (props) => {

    const [category,setCategory] = useState(false);

    const toggleCategory = () =>{
        setCategory(!category)
    }
    const closeCategory = () => {
        setCategory(false);
    }
    return (
        <NavContainer>
            <NavLinks>
                <LinkWrapper>
                    <LinkItem to='/'>
                        <LinkLogo src={Logo}></LinkLogo>
                    </LinkItem>
                </LinkWrapper>
                <RouteLinks onClick={closeCategory}>
                    <LinkWrapper onMouseEnter={toggleCategory} onMouseLeave={closeCategory}>
                        <LinkItem to='/shop'>Shop</LinkItem>
                        {category ?  <CategoryBar></CategoryBar>: <></>}
                    </LinkWrapper>
                    <LinkWrapper>
                        <LinkItem to='/Cart'>Cart</LinkItem>
                    </LinkWrapper>
                </RouteLinks>
            </NavLinks>
        </NavContainer>
    )
}

export default NavBar