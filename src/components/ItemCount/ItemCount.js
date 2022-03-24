import React,{useState} from 'react'
const ItemContador = ({stock}) => {
    const[contador, setContador] = useState(1)

    const Sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
        

    return{
           <div>
           </div>
    }
}

export default ItemContador