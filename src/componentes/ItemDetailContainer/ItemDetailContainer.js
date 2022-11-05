import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams , useNavigate} from 'react-router-dom'
import Loading from '../Loading/Loading';
import { getProduct} from '../../services/firebase/firestore/products';
import { useAsync } from '../../Hooks/useAsync';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {   
    const { productId } = useParams();
    const navigate = useNavigate() 

    const getProductWithId = () => getProduct(productId)

    const { data: product, error, loading } = useAsync(getProductWithId, [productId])   
  
    
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
        <div className='contenedor-detalle' >
            <h1><u>Detalle</u></h1>
            <ItemDetail  {...product} />
        </div>
    )
};

export default ItemDetailContainer;


