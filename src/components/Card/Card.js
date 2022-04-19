//import React,{ useState, useEffect } from 'react'
//import './Card.css'
//import { Button } from 'bootstrap'
//import ItemContador from '../ItemCount/ItemCount'
//import { Link, NavLink } from 'react-router-dom'
//import DetailPage from '../../pages/detail'
//
//
////Terminando importaciones
//
// function Card({data}){
//   const {imagen, titulo, precio , genero , talle, stock}= data
//
//   return(
//        <div className='Card'>
//            <img src={imagen} alt={titulo}/>
//            <h2 className='Card_titulo'>Titulo : {titulo}</h2>
//            <p className='Card_precio'>Precio : {precio}</p>
//            <p className='Card_genero'>Genero : {genero}</p>
//            <p className='Card_talle'>Talle : {talle}</p>
//            <ItemContador stock={stock} initial={1}/>
//            <button>
//                <Link to={'/productos/${id}'}>Ir al detalle</Link>
//            </button>
//        </div>
//    )
//}
//
//export default Card

import React,{ useState, useEffect, useContext } from 'react'
import CartContext from '../../context/CardContext'

import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';


export default function Card({ data, action }) {

    const navigate = useNavigate();
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const { title, price, talle, stock, image, id } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)

    useEffect( () => {
        console.log("cartProducts:", cartProducts)
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const changePage = () => {
        navigate(`/productos/${id}`)
    }
    const addToCart = (e) => {
        e.stopPropagation()  
        console.log("Productos agregados:", cartProducts) 
        addProductToCart(data)
    }
    return(
       
        <div className="card-item" onClick={changePage}>
                <div className='card-item__img'>
                    <img src={`./${image}`} alt={image} />
                </div>
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    <p>Talle : {talle}</p>
                    <Button onClick={addToCart} className="btn-custom">Comprar</Button>
                </div>
        </div>
    )
}

