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
            <NavLogo to='/'>1010Travels </NavLogo>
            <MobileIcon>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='home'>Home</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to='signin'>SignIn</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signin'>SignIn</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='signin'>SignIn</NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
            <NavBtnLinks to='/signin'>Sign In</NavBtnLinks>
            </NavBtn>
        </NavBarContainer>
    </Nav>
    </>
  )
}

export default NavBar