import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart'
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';


function App() {
   return (
    <div className="App">
    
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cuadros' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1 style={{ marginTop: '40vh', textAlign: 'center' }}>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>

    </div>
  );
}

export default App;
