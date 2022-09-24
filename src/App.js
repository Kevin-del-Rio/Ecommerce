import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App(children) {
  return (
    <div className="App">
     <Navbar />
    <ItemListContainer>
      La Cuadreria
    </ItemListContainer>
    </div>
  );
}

export default App;
