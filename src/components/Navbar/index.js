import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="#top">
                <h1>Arthur Boucard</h1>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to='#about' activeStyle>
                About
            </NavLink>
            <NavLink to='#projects' activeStyle>
                Projects
            </NavLink>
            <NavLink to='#contact' activeStyle>
                Contact
            </NavLink>
            </NavMenu>
        </Nav>
    );
}

export default Navbar
