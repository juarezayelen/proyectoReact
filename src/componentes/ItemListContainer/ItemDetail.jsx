import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({arrayDetalleItems}) {
    
    function onAdd(){
        alert(arrayDetalleItems.id + " " + arrayDetalleItems.nombre + " " + arrayDetalleItems.descripcion + " " + arrayDetalleItems.categoria + " " + arrayDetalleItems.stock);
    }
    
    return (
        <>
            <div>
                {(arrayDetalleItems)? 
                    <>
                    <p>{arrayDetalleItems.id}</p>
                    <p>{arrayDetalleItems.nombre}</p>
                    <p>{arrayDetalleItems.descripcion}</p>
                    <p>{arrayDetalleItems.categoria}</p>
                    <p>{arrayDetalleItems.stock}</p>
                    <div onClick={()=>onAdd()}>Agregar al Carrito</div>
                    <br />
                    <br />
                     <ItemCount tope={arrayDetalleItems.stock}/>
                    </>
                :
                    <>Loading...</>} 
                
            </div>
           
        </>
        
    );
}