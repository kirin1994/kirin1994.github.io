import React from 'react';
import './NavbarItem.css';

interface ItemProps {
    link:string,
    iconClassName:string
}

export const NavbarItem = ({link, iconClassName} :ItemProps) => 
        <li className="navbarItem">
            <a href={link}>
                <i className={iconClassName}></i>
            </a>
        </li>
    
