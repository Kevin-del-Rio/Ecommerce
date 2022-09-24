import './CartWidget.css';
import { RiShoppingCart2Line } from "react-icons/ri";

const CartWidget = () => {
    return (
        <div className='contenedor-carrito centrado'>
            <p className='cantidad-carrito'>0</p>
            <RiShoppingCart2Line className='carrito' />
        </div>
    )
};

export default CartWidget;