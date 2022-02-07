import React, {useState} from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({DetalleItem}) {
    
    const [mostrarItemCount, setMostrarItemCount] = useState(true)

    function onAdd(cantidad){
        alert('Agregar' +cantidad);
        setMostrarItemCount(false);
    }
    
    return (
        <>
            <div> 
                
                    <>
                    {/* <p>{DetalleItem.id}</p>
                    <p>{DetalleItem.nombre}</p>
                    <p>{DetalleItem.descripcion}</p>
                    <p>{DetalleItem.categoria}</p>
                    <p>{DetalleItem.stock}</p> */}
                    {
                    (mostrarItemCount)?
                     <ItemCount tope={DetalleItem} onAdd={onAdd}/>
                     :
                     <button>Finalizar compra</button>
                    }
                    </>
                
                
            </div>
           
        </>
        
    );
}