import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId          
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)            
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <Loading />
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