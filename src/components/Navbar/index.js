import './index.css';
import { Nav, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <a className="navlink" href="#top">
                <h1 className="name">Arthur Boucard</h1>
            </a>
            <Bars />
            <NavMenu>
                <a className="navlink" href="#about">About</a>
                <a className="navlink" href="#projects">Projects</a>
                <a className="navlink" href="#contact">Contact</a>
            </NavMenu>
        </Nav>
    );
}

export default Navbar
