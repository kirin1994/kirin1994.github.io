import React from 'react';
import './Navbar.css';
import {NavbarItem} from './NavbarItem';

function Navbar(){
    return (
        <>
        <nav className="navbarStyle" >
            <ul className="navbar-list">                
                <NavbarItem link ="#personal" iconClassName ="fas fa-address-card fa-3x"/>
                <NavbarItem link ="#history" iconClassName ="fas fa-history fa-3x"/>
                <NavbarItem link ="#education" iconClassName ="fas fa-landmark fa-3x"/>
                <NavbarItem link ="#contact" iconClassName ="far fa-address-book fa-3x"/>               
                <NavbarItem link ="https://www.linkedin.com/in/adrian-podlawski-261192129/" iconClassName ="fab fa-linkedin fa-3x"/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;