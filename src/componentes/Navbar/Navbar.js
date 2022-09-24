import React from 'react';
import './Navbar.css';
import Carrito from '../CartWidget/CartWidget';
import Logo from './assets/logo1.png';
import Boton from '../Boton/Boton';


function Navbar( children ) {
    return (
        <nav className='contenedor-navbar'>
            <div className='contenedor-logo centrado'>
                <img className='logo'
                    src={Logo}
                    alt='Logo de La Cuadreria' />
            </div>
            <div className='navbar-menu'>
                <Boton> Categorias </Boton>
                <Boton> Personalizar  </Boton>
                <Boton> Contacto </Boton>
            </div>
            <Carrito />            
        </nav>

    )
};

export default Navbar;