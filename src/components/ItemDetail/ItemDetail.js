import React from "react";
import './ItemDetail.css'
import ItemContador from "../ItemCount/ItemCount";


function ItemDetail ({item}) {
    const {titulo,descripcion, genero, talle, precio, stock} = item;
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
                <ItemContador stock={stock} initial={1}/>               
            </div>
        </div>
    )
}


export default ItemDetail;