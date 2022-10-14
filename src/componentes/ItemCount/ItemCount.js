import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, agregar})=> {
   const [cantidad, setCantidad] = useState(initial)

   const masItem = () => {
       if(cantidad < stock) {
           setCantidad(cantidad+1)
       }
   }

   const menosItem = () => {
       if(cantidad > 1) {
           setCantidad(cantidad - 1)
       }     
   }

   return(
       <div className='contenedor-contador'>          
            <div className='contenedor-controles'>
                <button className="Boton" onClick={menosItem}>-</button>
                <h4 className='Valor'>{cantidad}</h4>
                <button className="Boton" onClick={masItem}>+</button>
            </div>
            <div>
                <button className="Boton" onClick={() => agregar(cantidad)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount