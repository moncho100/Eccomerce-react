import React from "react";
import './ItemDetail.css'
import ItemContador from "../ItemCount/ItemCount";


function ItemDetail ({item}) {
    const {titulo,descripcion, genero, talle, precio, stock} = item;
    return(
        <div>
            <div>
                <img src="/public/hombre-camiseta-1.webp" alt="Imagen del producto"></img>
            </div>
            <div className="ItemDetail_details">
                <p>{titulo}</p>
                <p>{descripcion}</p>             
                <p>{genero}</p>
                <p>{talle}</p>
                <p>{precio}</p>
                <ItemContador stock={stock} initial={1}/>               
            </div>
        </div>
    )
}


export default ItemDetail;