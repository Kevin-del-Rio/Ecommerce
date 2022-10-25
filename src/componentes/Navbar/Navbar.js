import './Navbar.css';
import Carrito from '../CartWidget/CartWidget';
import Logo from './assets/logo1.png';
import Boton from '../Boton/Boton';
import { NavLink } from 'react-router-dom';


function Navbar( children ) {
    return (
        <nav className='contenedor-navbar'>
            <NavLink to='/'>
                <div className='contenedor-logo centrado'>
                    <img className='logo'
                        src={Logo}
                        alt='Logo de La Cuadreria' />
                </div>
            </NavLink>
            <div className='navbar-menu'>
                <NavLink to={"/cuadros"} ><Boton> Cuadros </Boton> </NavLink>              
                <NavLink to={"/category/series"} ><Boton> Series </Boton></NavLink>
                <NavLink to={"/category/musica"} ><Boton> Musica </Boton> </NavLink>
                <NavLink to={"/category/anime" }><Boton> Anime </Boton> </NavLink>
                <NavLink to={"/category/futbol"} ><Boton> Futbol </Boton> </NavLink>
            </div>
            <NavLink to="/cart" >  <Carrito /> </NavLink>
           
        </nav>

    )
};

export default Navbar;

