import { useEffect, useState } from "react";
import Card from "../Card/Card";
import mockPoroductos from "../mockProducts/mockProducts";
//terminan las importaciones

const ListProducts = () => {
    
        
        const[productos, setProductos]= useState([])

        const obtenerProductos= () => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(mockPoroductos);
                }, 2000);
            });
        };
     
        useEffect(() => {
            obtenerProductos().then((items) => {
                setProductos(items)
            }). finally (() => {
                console.log("Termino la llamada a los productos")
            })
        },[])

    
    return(
        <div className="container-cards">
            <h2></h2>

            {productos.map((producto)=>{
                const{id} = producto
                return(
                   <Card data={producto} key={id}/>
                )
            })}
        </div>
    )
}

export default ListProducts;