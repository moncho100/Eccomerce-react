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
            {/*<Card titulo='Short' genero='Femenino' talle='s' precio={250}/>
            <Card titulo='vestido' genero='Femenino' talle='xl' precio={600}/>
            <Card titulo='zapatillas' genero='Masculino' talle='m' precio={500}/>*/}
        </div>
    )
}

export default ListProducts;