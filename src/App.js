import './App.css';
import { useState, createContext } from 'react';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer';

export const MyContext = createContext();

function App() {

  const [cart , setCart] = useState([])

  console.log(cart)

  return (
    <div className="App">
      <MyContext.Provider value={{ cart, setCart }}>

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cuadros' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1 style={{ marginTop: '40vh', textAlign: 'center' }}>404 NOT FOUND</h1>} />
          </Routes>

          <Footer />

        </BrowserRouter>

      </MyContext.Provider>
    </div>
  );
}

export default App;
