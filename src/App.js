import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './componentes/Main/Main'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Main /> }/>  
            <Route path='/cuadros' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> }/> 
            <Route path='*' element={ <h1 style={{marginTop:'40vh',textAlign:'center'}}>404 NOT FOUND</h1> } />
          </Routes>           
        </BrowserRouter>
    </div>
  );
}

export default App;
