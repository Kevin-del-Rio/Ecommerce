import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, img, name, price }) => {
    return (
        <div className='Contenedor-card'>
            <Link className='link' to={`/detail/${id}`}>
                <img className='img-card' src={img} alt={name} />
                <h3>{name}</h3>
                <p className='precio-card'>$ {price} c/u</p>
            </Link>
        </div>
    )
}
export default Item;
