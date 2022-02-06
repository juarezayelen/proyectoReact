import React from "react";
import ItemCount from "./ItemCount";

export default function CategoriaDetail ({arrayCategoriaItems}) {
    function onAdd(){
        alert(arrayCategoriaItems.id + " " + arrayCategoriaItems.nombre + " " + arrayCategoriaItems.descripcion + " " + arrayCategoriaItems.categoria + " " + arrayCategoriaItems.stock);
    }
    
    return (
        <>
            <div>
                {(arrayCategoriaItems)?
                    <>
                    <p>{arrayCategoriaItems.id}</p>
                    <p>{arrayCategoriaItems.nombre}</p>
                    <p>{arrayCategoriaItems.descripcion}</p>
                    <p>{arrayCategoriaItems.categoria}</p>
                    <p>{arrayCategoriaItems.stock}</p>
                    <div onClick={()=>onAdd()}>Agregar al Carrito</div>
                    <br />
                    <br />
                    </>
                :
                    <>Loading...</>
                }
                <ItemCount tope={arrayCategoriaItems.stock}/>
            </div>
            
        </>
        
    );
}