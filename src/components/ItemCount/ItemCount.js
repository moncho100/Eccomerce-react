import React,{useState} from 'react'
const ItemContador = ({stock}) => {
    const[contador, setContador] = useState(1)

    const Agregar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    return(
        <div>
            <p>1</p>
            <button>-</button>
            <button onClick={Agregar}>+</button>
            
        </div>
    )
           
    
}

export default ItemContador