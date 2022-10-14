import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, img, name, price }) => {
    return (
        <div className='Contenedor-card'>
            <img className='img-card' src={img} alt={name} />
            <h3>{name}</h3>
            <p className='precio-card'>$ {price} c/u</p>
            <u><Link className='link' to={`/detail/${id}`}>Ver Detalle</Link></u>            
        </div>
    )
}
export default Item;
