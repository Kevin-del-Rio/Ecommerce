import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams();

    useEffect(() => {
        setLoading(true)
        getProductById(productId).then(response => {             
            setProduct(response)          
        }).finally(() => {
            setLoading(false)
        })
       
    }, [productId])
    
    if (loading) {
        return <Loading />
    }
   
    return (
        <div className='contenedor-detalle' >
            <h1><u>Detalle</u> </h1>
            <ItemDetail  {...product} />
        </div>
    )
};

export default ItemDetailContainer;