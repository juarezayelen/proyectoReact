import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({arrayDetalleItems}) {
    
    function onAdd(){
        alert(arrayDetalleItems.id + " " + arrayDetalleItems.nombre + " " + arrayDetalleItems.stock);
    }
    
    return (
        <>
            <div>
                {(arrayDetalleItems)?
                    <>
                    <p>{arrayDetalleItems.id}</p>
                    <p>{arrayDetalleItems.nombre}</p>
                    <p>{arrayDetalleItems.stock}</p>
                    <p>{arrayDetalleItems.descripcion}</p>
                    <p>{arrayDetalleItems.img}</p>
                    <div onClick={()=>onAdd()}>Agregar al Carrito</div>
                    <ItemCount tope={arrayDetalleItems.stock} />
                    <br />
                    <br />
                    </>
                :
                    <>Loading...</>
                }
            </div>
            
        </>
        
    );
}