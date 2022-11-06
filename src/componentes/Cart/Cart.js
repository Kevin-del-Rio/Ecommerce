import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import Boton from '../Boton/Boton'
import { useCart } from '../../context/CartContext'

const Cart = () => {

    const { cart, total, clearCart } = useCart()
    return (
        <div className='Cart'>
            <h1><u>Carrito de compras</u></h1>
            <div className='Cart-Contenedor'>  
                {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
                <div>                    
                    {total > 0 ? <h1 className='totalCart'>  $ {total} </h1> : <h1>No hay productos</h1>}
                    {total > 0 ? <h3 className='limpiarCart'><u onClick={() => clearCart()}> Limpiar Carrito</u></h3> : ''}
                </div>
                
            </div>
            {total > 0 &&  <Link className='check' to='/checkout'><Boton>Confirmar Compra</Boton></Link>}
        </div>


    )
}
export default Cart