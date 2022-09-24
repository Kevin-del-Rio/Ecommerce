import './Boton.css';

const Boton = ({ children = 'Boton' }) =>{
    return(
        <button className='btn'>
            {children}
        </button>
    )
};

export default Boton;