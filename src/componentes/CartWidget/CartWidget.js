import './CartWidget.css';
import { RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    
    const { totalQuantity} = useContext(CartContext) 
    return (
        <div className='contenedor-carrito centrado'>
            <p className='cantidad-carrito'>{totalQuantity}</p>
            
            <RiShoppingCart2Line className='carrito' />
        </div>
    )
};

export default CartWidget;