import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProductsByCategory, getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';

const ItemListContainer = ({ greeting  }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response)
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