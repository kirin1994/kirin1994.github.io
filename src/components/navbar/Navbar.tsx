import React from 'react';
import './Navbar.css';
import {NavbarItem} from './NavbarItem';

function Navbar(){
    return (
        <>
        <nav className="navbarStyle" >
            <ul>
                <NavbarItem link ="https://www.linkedin.com/in/adrian-podlawski-261192129/" iconClassName ="fab fa-linkedin navbarIcon"/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;