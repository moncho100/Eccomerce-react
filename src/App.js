import './App.css';
import  NavBar from './components/Navbar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <h2>Ropa deportiva</h2>
      <ListProducts/>
      

    </div>
    
  );
}

export default App;
