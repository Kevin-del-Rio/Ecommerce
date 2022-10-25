import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
 

   return(
       <div className='contenedor-contador'>          
            <div className='contenedor-controles'>
                <button className="Boton" onClick={decrement}>-</button>
                <h4 className='Valor'>{quantity}</h4>
                <button className="Boton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Boton" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount