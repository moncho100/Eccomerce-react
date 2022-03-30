import React,{useState} from 'react'

    const ItemContador = ({stock, initial}) => {
        const [contador, setContador]= useState(initial)
        const ItemContador = () =>{
            if (contador <stock){
                setContador(contador +1)
            }
        }
        const RestarContador = () =>{
            if(contador > initial){
                setContador(contador -1)
            }
        }
        const Agregar = () =>{
            console.log("Agregaste 1 producto al carrito")
        }
        return(
            <div>
                <p>{contador}</p>
                <button onClick={RestarContador}>-</button>
                <button onClick={ItemContador}>+</button>
                <button onClick={Agregar}>Agregar al carrito</button>
            </div>
        )
    }
     
    


export default ItemContador