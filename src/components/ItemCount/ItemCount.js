import React,{useState} from 'react'

    const ItemContador = ({stock, initial}) => {
        const [contador, setContador]= useState(initial)
        const ItemContador = () =>{
            if (contador <stock){
                setContador(contador +1)
            }
        }
        const RestarContador = () =>{
            if(contador > 0){
                setContador(contador -1)
            }
        }
        const Agregar = () =>{
            console.log("Agregaste 1 producto al carrito")
        }
        return(
            <div>
                <p onClick={Agregar}>1</p>
                <button onClick={RestarContador}>-</button>
                <button onClick={ItemContador}>+</button>
            </div>
        )
    }
     
    


export default ItemContador