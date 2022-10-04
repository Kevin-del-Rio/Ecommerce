import './Item.css';


const Item = ({ img, name, desc, price }) => {
    return(
        <div className='Contenedor-card'>
            <img src={img} alt= {name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{desc}</p>            
        </div>
    )
}
export default Item;