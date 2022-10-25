import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {

    const { cart, total } = useContext(CartContext)

    return (
        <div className='Cart'>
            <div className='Cart-Contenedor'>
                <h1>Carrito de compras</h1>
                {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
                <div>
                    {
                        total > 0
                            ? <h1 className='totalCart'>  $ {total} </h1>
                            : <h1>No hay productos</h1>
                    }
                </div>
            </div>
        </div>


    )
}
export default Cart