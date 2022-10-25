import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams();

    useEffect(() => { 
        const docRef = doc(db, 'products', productId )
        
        getDoc(docRef).then( response =>{
            console.log(response)
            const data = response.data();
            const productAdapted = { id : response.id, ...data }
            setProduct(productAdapted)
        }).finally (() => {
            setLoading(false)
        })
        
        // getProductById(productId).then(response => {             
        //     setProduct(response)          
        // }).finally(() => {
        //     setLoading(false)
        // })
       
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