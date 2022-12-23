import React from 'react'
import {Nav,NavBarContainer, NavLogo} from './NavElements'


const NavBar = () => {
  return (
    <>
    <Nav>
        <NavBarContainer>
            <NavLogo to='/'>1010Travels </NavLogo>
        </NavBarContainer>
    </Nav>
    </>
  )
}

export default NavBar