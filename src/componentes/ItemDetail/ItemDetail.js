import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'


const ItemDetail = ({ id, name, img, category, descripcion, price, stock }) => {

    const { addItem, isInCart} = useContext(CartContext)

    const manejarAgregar = (quantity) => {
        const productToAdd = {
            id, name, descripcion, price, quantity
        }
        addItem(productToAdd)

    }
    // const quantityAdded = getProductQuantity(id)
    return (
        <div className='contenedor-detalle-producto'>
            <div className='contenedor-img-detalle'>
                <img className='img' src={img} alt={name} /> 
            </div>
            <div className='contenedor-informacion'>
                <p className='cat'><u>{category}</u> </p>
                <p className='desc'>{descripcion} </p>
                <p className='precio'>$ {price} c/u</p>
                <div>
                    {
                        stock > 0 && !isInCart(id)
                            ? <ItemCount onAdd={manejarAgregar} stock={stock} />
                            : !isInCart(id)
                                ?<h2>No hay stock</h2>
                                : <Link to='/cart'><Boton >Ver carrito</Boton></Link>
                    }
                </div>
            </div>

        </div>
    )

};

export default ItemDetail;