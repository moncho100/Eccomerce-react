import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import CartWidget from '../CartWidget/CardWidget';

function Navbar(){

    return(
        <header className= 'main-header'>
            <div className= 'container-logo'>
                <img src="/src/img/logo.png" className='img-header'>
                </img>
            </div>
            <ul className='navbar'>
                <li>
                    <button>
                        <Link to={'/'}>Inicio</Link>
                    </button>
                </li>                
                <li><button>Hombre</button></li>
                <li><button>Mujer</button></li>
                <li>
                    <button>
                        <Link to={'/contact'}>Contacto</Link>
                    </button>
                    </li>
            </ul>
            <CartWidget/>
        </header>
    )

}

export default Navbar;