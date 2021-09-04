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
                <LinkWrapper to='/'>
                    <LinkItem>
                        <LinkLogo src={Logo}></LinkLogo>
                    </LinkItem>
                </LinkWrapper>
                <RouteLinks onClick={closeCategory}>
                    <LinkWrapper to='/shop' onMouseEnter={toggleCategory} onMouseLeave={closeCategory}>
                        <LinkItem >Shop</LinkItem>
                        {category ?  <CategoryBar></CategoryBar>: <></>}
                    </LinkWrapper>
                    <LinkWrapper to='/Cart'>
                        <LinkItem >Cart</LinkItem>
                    </LinkWrapper>
                </RouteLinks>
            </NavLinks>
        </NavContainer>
    )
}

export default NavBar