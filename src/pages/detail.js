import { Button } from "bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import mockPoroductos from "../components/mockProducts/mockProducts"

const DetailPage = ()=>{
    const {id} = useParams()
    const [product, SetProduct] = useState({})

    useEffect(()=>{
        filtrProductsById(mockPoroductos, id)
    },[id])
    
    const filtrProductsById = (array, id) =>{
        return array.map((product) =>{
            if(product.id == id){
                return SetProduct(product)
            }
        }) 
    }

    return(
        <div className="container-detail">
            <div className="container-detail__img">
                <img src="" alt=""/>
            </div>
            <div className="container-detail__info">
                <h3>{product.titulo}</h3>
                <p>$ {product.precio}</p>
            </div>
        </div>
    )
}

export default DetailPage