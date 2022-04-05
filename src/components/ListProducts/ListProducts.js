import { useEffect, useState } from "react";
import Card from "../Card/Card";

const ListProducts =({children}) => {
    const mockPoroductos =[{
        id: 1,
        imagen:'/public/hombre-buzo-adidas-essentials-bog-logo.webp',
        titulo:'Buzo Adidas Essentials Big Logo',
         genero:'Masculino',
          talle:'l' ,
          precio:420,
          stock: 10
        },
        {
            id: 2,
            titulo: 'Campera Adidas Essentials Logo',
            genero: 'Femenino',
            talle: 'm',
            precio: 460,
            stock: 10
        },
        {
            id:3,
            titulo:'Chomba Under Armour Curry Reserve',
            genero:'Masculino',
            talle:'XL - L - M',
            precio: 450,
            stock: 15
        },
        {
            id:4,
            titulo:'Pantalon Adidas Sereno',
            genero:'Femenino',
            talle:'S - M',
            precio: 525,
            stock: 9,
        },
        {
            id:5,
            titulo:'Pantalon Adidas Essentials Logo',
            genero:'Masculino',
            talle:'XL - L',
            precio: 520,
            stock: 13,
        },
        {
            id:6,
            titulo:'Top Adidas Floral',
            genero:'Femenino',
            talle:'S - M -L',
            precio:500,
            stock:18
        },
        {
            id:7,
            titulo:'Remera Fila Logotype',
            genero:'Masculino',
            talle:'M - L - XL',
            precio: 550,
            stock: 15
        },
        {
            id:8,
            titulo:'Calza Puma Moto',
            genero:'Femenino',
            talle:'M - L',
            precio: 515,
            stock: 12,
        },
        {
            id:9,
            titulo:'Remera Salomon Retrotype',
            genero:'Masculino',
            talle:'S - L',
            precio:490,
            stock: 7,
        },
        {
            id:10,
            titulo:'Calza Under Armour Fly Fast Printed',
            genero:'Femenino',
            talle:'S - L',
            precio: 530,
            stock: 16.
        },
        {
            id:11,
            titulo:'Short Adidas Tennis Club',
            genero:'Masculino',
            talle:'M - L',
            precio:505,
            stock:11,
        },
        {
            id:12,
            titulo:'Remera Converse Patch',
            genero:'Femenino',
            talle:'S - M -L',
            precio: 540,
            stock: 7
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