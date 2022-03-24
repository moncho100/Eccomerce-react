import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemContador from '../ItemCount/ItemCount'
export default function Card({data}){
   const {titulo, precio , genero , talle, stock}= data
   const [contador, setContador] = useState(1)
   const[restador, setRestador] = useState(1)

   useEffect(()=>{
       console.log("Solo de inicio del proceso")
   },[])//Solo en el inicio

   useEffect(()=>{
       console.log("Siempre que se actualize")
   })//Se lleva a cabo cada vez que se produzca algun cambio

   useEffect(()=>{
    console.log("Solo cuando se agregue stock")
  },[contador])//Se lleva a cabo cada vez que se agrega stock

   useEffect(()=>{
       console.log("Solo cuando se resta stock")
   },[restador])//Se lleva a cabo cada vez que se resta stock
   
    
   return(
        <div className='Card'>
            
            <h2>Titulo : {titulo}</h2>
            <p>Precio : {precio}</p>
            <p>Genero : {genero}</p>
            <p>Talle : {talle}</p>
            <p>Stock: {contador}</p>
            <ItemContador stock={stock}/>
        </div>
    )
}

