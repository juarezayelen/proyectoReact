import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    
    //const {itemId}=useParams();
    const [arrayDetalleItems, setArrayDetalleItems]=useState({});

    useEffect(()=>{
        setTimeout(()=>{
            const arrayDetalleItems = [ 
                { id: 1, nombre: 'item1', descripcion:'unodostres', img:'/img/1', stock: 5 },
                { id: 2, nombre: 'item2', descripcion:'unodostres', img:'/img/2', stock: 6 },
                { id: 3, nombre: 'item3', descripcion:'unodostres', img:'/img/3', stock: 0 }
            ]
            //setItem(listaDeItems.filter(item=> item.id == itemId));
            // let myItem= listaDeItems[0];
            //setItem(myItem);
        }, 2000)
    }, [])

    return (
        <>
        
        <ItemDetail arrayDetalleItems={arrayDetalleItems}/>
        
        </>
    );
}