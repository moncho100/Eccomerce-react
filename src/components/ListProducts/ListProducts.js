import Card from "../Card/Card";

const ListProducts =({children}) => {

    let dataProduct ={
        titulo:'Remera',
         genero:'Masculino',
          talle:'l' ,
          precio:300,
          stock: 10
        }
    
    return(
        <div className="container-cards">
            <h2>{children}</h2>

            <Card data={dataProduct}/>
        </div>
    )
}

export default ListProducts;