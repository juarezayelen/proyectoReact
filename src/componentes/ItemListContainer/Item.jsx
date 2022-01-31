import React from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


export default function Item({item}){

    function onAdd(){
        alert(item.id + " " + item.nombre + " " + item.stock);
    }
    
    
    return(
        <>Item:
            <p>{item.id}</p>
            <p>{item.nombre}</p>
            <p>{item.stock}</p>
            <div onClick={()=>onAdd()}>Agregar al Carrito</div>
            <ItemCount tope={item.stock} />
            <ItemDetailContainer/>
            <br />
            <br />
        </>
    )
}