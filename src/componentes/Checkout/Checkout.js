import './Checkout.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'


const Checkout = () => {
    const { cart, total } = useContext(CartContext)
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [mail, setMail] = useState()

    const order = {
        buyer: {
            name: name,
            lastName: lastName,
            phone: phone,
            mail: mail
        },
        items: cart,
        total
    }
   /*
       const createOrder = async () => {
            setLoading(true)
    
            try {
                const objOrder = {
                    buyer: {
                        name: {name},
                        address: {address},
                        phone: {phone},
                        email: {email}
                    },
                    items: cart,
                    total: total
                }

                const batch = writeBatch(dataBase)

                const outOfStock = []
    
                const ids = cart.map(prod => prod.id)
        
                const productsRef = collection(dataBase, 'products')
        
                const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
    
                const { docs } = productsAddedFromFirestore
                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock
    
                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productAddedToCart?.quantity
    
                    if(stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
                if(outOfStock.length === 0) {
                    await batch.commit()
    
                    const orderRef = collection(dataBase, 'orders')
    
                    const orderAdded = await addDoc(orderRef, objOrder)
                    setNotification('success',`El id de su orden es: ${orderAdded.id}`)
                } else {
                    setNotification('error','Productos fuera del stock disponible')
                }
    
                    clearCart()
    
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
    
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
            
        }
   */




    return (
        <div className='contenedor-checkout'>
            <div className="form">
                <div className="title" >Datos Personales</div>
                <div className="subtitle">Completa los datos para terminar la compra.</div>
                <div className="input-container ic1">
                    <input className="input" onChange={e => setName(e.target.value)}
                        type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Nombre</label>
                </div>
                <div className="input-container ic2">
                    <input className="input"  onChange={e => setLastName(e.target.value)} type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Apellido</label>
                </div>
                <div className="input-container ic2">
                    <input className="input"  onChange={e => setPhone(e.target.value)} type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label className="placeholder">Teléfono</label>
                </div>
                <div className="input-container ic2">
                    <input className="input"  onChange={e => setMail(e.target.value)} type="text" placeholder=" " />
                    <div className="cut cut-short"></div>
                    <label className="placeholder">Correo</label>
                </div>
                <button type="text" className="submit">Enviar</button>
            </div>
        </div>
    )
}

export default Checkout;


