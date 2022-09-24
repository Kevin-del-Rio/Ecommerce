import './ItemListContainer.css';
import img from './assets/cuadros-main.png'

const ItemListContainer = ({ children = 'Empresa' }) => {
    return (
        <div className='contenedor-img'>
            <img className='img' src={img} alt='imagen main La cuadreria'></img>
            <div className='contenedor-texto'>
                <p className='texto'>Bienvenidos a</p>
                <p className='texto titulo'>
                    <u>{children}</u>
                </p>
            </div>
        </div>
    )
}

export default ItemListContainer;