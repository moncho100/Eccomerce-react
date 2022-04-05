import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer (){
    let mockProducts= []

    const mockItemID = 1;

    const [item, setItem] = useState({});

    const getProducts = () => {
        let promise = new Promise ((resolve, reject)=> {
            setTimeout(()=>{
                resolve (mockProducts)}, 2000);
        })
        let result = promise;
        return (result)
    }

    useEffect(()=>{
        getProducts().then((datalist)=>{
            const obtenido = datalist.find(element => element.id === mockItemID)
            setItem(obtenido);
        }).finally(()=>{
            console.log("Finalizo la llamada al item")
        })
    })
    
    return(
        <div className="">
            <h2>Detalles del producto</h2>
            <ItemDetail item ={item}/>
        </div>
    )
}

export default ItemDetailContainer;

