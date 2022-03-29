import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemContador from '../ItemCount/ItemCount'


 function Card({data}){
   const {titulo, precio , genero , talle, stock}= data

   return(
        <div className='Card'>
            <h2>Titulo : {titulo}</h2>
            <p>Precio : {precio}</p>
            <p>Genero : {genero}</p>
            <p>Talle : {talle}</p>
            <ItemContador stock={stock} initial={1}/>
        </div>
    )
}

export default Card

