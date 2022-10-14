import './Main.css';
import img from './assets//muro.jpg'

const Main = ({ children = 'Empresa' }) => {
    return (
        <div className='contenedor-img-main'>
            <img className='img-main' src={img} alt='imagen main La cuadreria'></img>
            <div className='contenedor-texto'>
                <p className='texto'>Bienvenidos a</p>
                <p className='texto titulo'>
                    <u>{ children }</u>
                </p>
            </div>
        </div>
    )
}

export default Main;

