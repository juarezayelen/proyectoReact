import React, {useState} from "react";
import Producto from "./Producto";

export default function ListaDeProductos(){
   

    const [arrayDeProductos, setArrayDeProductos] = useState([
        {nombre: 'item1', stock:5},
        {nombre: 'item2', stock:6},
        {nombre: 'item3', stock:0}
    ]);

    return(
        <>
            {
                arrayDeProductos.map(item=>{
                    return <Producto item={item}/>
                })
            }
        </>
    )
}