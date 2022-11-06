import './Checkout.css';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

  const { cart, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [phone, setPhone] = useState()
  const [mail, setMail] = useState()


  const createOrder = async () => {
    setLoading(true)
    try {
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
      const batch = writeBatch(db)

      const outOfStock = []

      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

      const { docs } = productsAddedFromFirestore
      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      })

      if (outOfStock.length === 0 && name && lastName && phone && mail) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, order)

        const Toast = Swal.mixin({
          toast: true,
          background: '#010d23',
          color: '#fff',
          position: 'top-end',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: ` Orden Procesada Correctamente`
        })
        console.log(orderAdded)
        clearCart()
        navigate('/')
      } else {
        if (outOfStock.length > 0) {
          const Toast = Swal.mixin({
            toast: true,
            background: 'red',
            color: '#fff',
            position: 'top-end',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'warning',
            title: 'Hay productos que estan fuera de stock'
          })
        } else {
          if (!name || !lastName || !phone | !mail) {
            Swal.fire({
              icon: 'info',
              title: 'Algunos de los datos no fue cargado correctamente',
              text: 'vuelva a intentar',
            })
          }
        }

      }
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error Inesperado',
        text: 'vuelva a intentar',
      })
      navigate('/')
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className='contenedor-checkout'>
      <div className="form">
        <div className="title" >Datos Personales</div>
        <div className="subtitle">Completa los datos para terminar la compra.</div>
        <div className="input-container ic1">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" pattern="[a-zA-Z ]{1,35}" className="input" placeholder=" " required />
          <div className="cut"></div>
          <label className="placeholder">Nombre</label>
        </div>
        <div className="input-container ic2">
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="input" placeholder=" " required />
          <div className="cut"></div>
          <label className="placeholder">Apellido</label>
        </div>
        <div className="input-container ic2">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="input" placeholder=" " required />
          <div className="cut"></div>
          <label className="placeholder">Teléfono</label>
        </div>
        <div className="input-container ic2">
          <input value={mail} onChange={(e) => setMail(e.target.value)} type="email" className="input" placeholder=" " required />
          <div className="cut cut-short"></div>
          <label className="placeholder">Correo</label>
        </div>
        <button type="text" onClick={createOrder} className="submit">Enviar</button>
      </div>
    </div>
  )
}

export default Checkout;