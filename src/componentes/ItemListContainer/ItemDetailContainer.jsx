import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams, Link } from 'react-router-dom';

export default function ItemDetailContainer() {
    
    const {itemId}=useParams();
    const [DetalleItem, setDetalleItem]=useState({});

    useEffect(()=>{
        setTimeout(()=>{
            let DetalleItem =[
                { id: 1, nombre: 'remera brillos', descripcion: 'remera de modal', categoria: 'remeras', stock: 5 },
                
            ]
            DetalleItem=DetalleItem.filter(item=> item.id === itemId);
            let myItem= DetalleItem[0];
            setDetalleItem(myItem);
        }, 2000)
    }, [itemId])

    return (
        <>
        {itemId}
        <ItemDetail DetalleItem={DetalleItem}/>
        <Link to={"/item/2"}> Ver Más Info</Link>
        
        </>
    );
}