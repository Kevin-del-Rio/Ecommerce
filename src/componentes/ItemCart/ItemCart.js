import React from 'react'
import '../ItemCart/ItemCart.css'
import { BiTrash} from "react-icons/bi";
import { useCart } from '../../context/CartContext';

const ItemCart = ({ descripcion, quantity, price, id }) => {

    const { removeItem } = useCart()
    return (
        <div className='Cart-Item'>
            <p>{descripcion}</p>
            <p>{quantity}</p>
            <p>$ {price} c/u</p>
            <p>$ {price * quantity}</p>
            <BiTrash className='trash' onClick={() => removeItem(id)}/>  
        </div>
    )
}

export default ItemCart



