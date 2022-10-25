import React from 'react'
import '../ItemCart/ItemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BiTrash} from "react-icons/bi";

const ItemCart = ({ descripcion, quantity, price, id }) => {

    const { removeItem } = useContext(CartContext)
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



