import React,{ useState, useEffect } from 'react'
import './Card.css'
import { Button } from 'bootstrap'
import ItemContador from '../ItemCount/ItemCount'
import { Link, NavLink } from 'react-router-dom'
import DetailPage from '../../pages/detail'


//Terminando importaciones

 function Card({data}){
   const {imagen, titulo, precio , genero , talle, stock}= data

   return(
        <div className='Card'>
            <img src={imagen} alt={titulo}/>
            <h2 className='Card_titulo'>Titulo : {titulo}</h2>
            <p className='Card_precio'>Precio : {precio}</p>
            <p className='Card_genero'>Genero : {genero}</p>
            <p className='Card_talle'>Talle : {talle}</p>
            <ItemContador stock={stock} initial={1}/>
            <button>
                <Link to={'/productos/${id}'}>Ir al detalle</Link>
            </button>
        </div>
    )
}

export default Card

