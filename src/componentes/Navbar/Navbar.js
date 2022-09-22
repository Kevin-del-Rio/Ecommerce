import React from 'react';
import './Navbar.css';
import { RiShoppingCart2Line } from "react-icons/ri";
import Logo from './assets/logo1.png'

function Navbar() {
    return (
        <nav className='contenedor-navbar'>
            <div className='contenedor-logo'>
                <img className='logo'
                    src={Logo}
                    alt='Logo de La Cuadreria'
                />
            </div>
            <ul className='navbar-menu'>
                <li className='menu-item'>Galery</li>
                <li className='menu-item'>Quienes somos</li>
                <li className='menu-item'>Contacto</li>
            </ul>
            <div className='contenedor-carrito'>
               <RiShoppingCart2Line />
            </div>
        </nav>

    )
};

export default Navbar;