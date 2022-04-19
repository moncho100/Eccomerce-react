import './App.css';
import  NavBar from './components/Navbar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/home';
import Contact from './pages/contact';
import DetailPage from './pages/detail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CardContext';


function App() {

  return (
    //JSX
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/productos/:id' element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
