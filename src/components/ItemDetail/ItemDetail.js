import React from "react";
import './ItemDetail.css'
import ItemContador from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function ItemDetail ({item}) {
    const {titulo,descripcion, genero, talle, precio, stock} = item;
    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    
    const onAdd = (e, count) => {
      if(!!e & productQuantity<1){
          setProductQuantity(count);
      }
    }
    useEffect(()=>{
      if(productQuantity>0){
          setMostrarItemCount(false);
          
      }
    },[productQuantity])
    
    console.log("Cantidad de Productos", productQuantity)


    return(
        <div>
            <div>
                <img src="./hombre-buzo-adidas-essentials-bog-logo.webp" alt="Imagen del producto"></img>
            </div>
            <div className="ItemDetail_details">

                <p>titulo: {titulo}</p>
                <p>Descripcion: {descripcion}</p>             
                <p>Genero: {genero}</p>
                <p>Talle: {talle}</p>
                <p>Precio:{precio}</p> 
                <div className='btnComprarDetail'>
                {mostrarItemCount (
                        <ItemContador stock={stock} initial={1} action={onAdd}/>
                        )( <div>
                                <Link to='/src/pages/cart.js'>
                                    <Button  variant="contained" size="small" color="success" className="btnComprarDetail2">Finalizar Compra</Button>
                                </Link>
                            </div>
                        )
                    }
          
            </div>
                </div>
        </div>
    )
}


export default ItemDetail;