import { useEffect, useState } from "react";
import Card from "../Card/Card";

const ListProducts =({children}) => {
    const mockPoroductos =[{
        id: 1,
        titulo:'Remera',
         genero:'Masculino',
          talle:'l' ,
          precio:300,
          stock: 10
        },
        {
            id: 2,
            titulo: 'Short',
            genero: 'Femenino',
            talle: 'm',
            precio: 310,
            stock: 10
        }
    ]
        
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

        //console.log(
        //    obtenerProductos().then((item) =>{
        //        console.log(item);
        //    }) 
        //)
    
    return(
        <div className="container-cards">
            <h2>{children}</h2>

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