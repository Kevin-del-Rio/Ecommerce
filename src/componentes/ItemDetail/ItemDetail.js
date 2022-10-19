import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { MyContext } from '../../App';


const ItemDetail = ({ id, name, img, category, descripcion, price, stock}) => {

const { cart , setCart } = useContext(MyContext)
    const manejarAgregar = (cantidad) => {
        const agregar = {
            id, name, price, cantidad           
        }
         setCart([...cart, agregar])
    } 
    return (
        <div className='contenedor-detalle-producto'>
            <div className='contenedor-img-detalle'>
                <img className='img' src={img} alt={name}/>
            </div>
            <div className='contenedor-informacion'>
                <p className='desc'>{ descripcion } </p>
                <p className='precio'>$ { price } c/u</p> 
                <div><ItemCount agregar={manejarAgregar} stock={stock} /></div>               
            </div>
            
        </div>
    )

};

export default ItemDetail;