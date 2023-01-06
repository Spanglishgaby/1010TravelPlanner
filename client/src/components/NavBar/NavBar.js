import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
  NavBarContainer,
  NavLogo, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,NavBtn,NavBtnLinks} from './NavElements'


const NavBar = () => {
  return (
    <>
    <Nav>
        <NavBarContainer>
            <NavLogo to='/'>1010.com </NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='/'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/signin'>Log In</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/faq'>FAQ</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to='/planner'>Planner</NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
            <NavBtnLinks to='/signup'>Sign Up</NavBtnLinks>
            </NavBtn>
        </NavBarContainer>
    </Nav>
    </>
  )
}

export default NavBar