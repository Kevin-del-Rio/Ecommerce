import './Navbar.css';
import { useEffect, useState } from 'react';
import Carrito from '../CartWidget/CartWidget';
import Logo from './assets/logo1.png';
import Boton from '../Boton/Boton';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, orderBy, query} from 'firebase/firestore'
import { db } from '../../services/firebase'


const Navbar = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {


    const collectionRef = query(collection(db, 'categories'), orderBy('order'))
    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
      setCategories(categoriesAdapted)
    })
  }, [])

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
        {
          categories.map(cat => (
            <NavLink key={cat.id} to={`/category/${cat.slug}`} ><Boton> {cat.label} </Boton> </NavLink>
          ))
        }

      </div>
  
      <NavLink to="/cart" >  <Carrito /> </NavLink>

    </nav>

  )
};

export default Navbar;

