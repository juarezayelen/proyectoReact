import React from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


export default function Item({ item }) {

    function onAdd() {
        alert(item.id + " " + item.nombre + " " + item.categoria + " " + item.stock);
    }


    return (
        <>
            <div className='DatosDeProducto'>
                <br />
                <label>Código de Producto:</label><p>{item.id}</p>
                <label>Nombre:</label><p>{item.nombre}</p>
                <label>Categoría:</label><p>{item.categoria}</p>
                <label>Stock:</label><p>{item.stock}</p>
            </div>

            <div  className='FormatoCarrito' onClick={() => onAdd()}>Agregar al Carrito</div>
            <ItemCount tope={item.stock} />
            <ItemDetailContainer/>
            <br />
            <br />
        </>
    )
}