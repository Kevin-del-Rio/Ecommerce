import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ products }){
    return(
      <div>
        {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} des={prod.descripcion} price= {prod.price}/>)}
      
      </div>
    )
}

export default ItemList;