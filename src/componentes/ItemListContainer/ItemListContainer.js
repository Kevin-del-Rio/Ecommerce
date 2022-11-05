import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../Hooks/useAsync';
import Swal from 'sweetalert2';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()

    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return <Loading />
    }

    if(error){
        return(
            Swal.fire({
                icon: 'error',
                title: 'Error Inesperado',
                text: 'Regreso al inicio',
                footer: navigate('/')
              })
        )
    }

    return (
        <div className='contenedor'>
            <h1><u>Listado de productos</u></h1>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;