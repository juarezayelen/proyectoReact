import React, { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams, Link } from 'react-router-dom';

export default function ItemDetailContainer() {
    
    const {itemId}=useParams();
    const [arrayDetalleItems, setArrayDetalleItems]=useState({});

    useEffect(()=>{
        setTimeout(()=>{
            let arrayDetalleItems = [ 
                { id: 1, nombre: 'remera brillos', descripcion: 'remera de modal', categoria: 'remeras', stock: 5 },
                { id: 2, nombre: 'remera roja', descripcion: 'remera de algodon', categoria: 'remeras', stock: 5 },
                { id: 3, nombre: 'remera azul', descripcion: 'remera de modal', categoria: 'remeras', stock: 5 },
                { id: 4, nombre: 'vestido corto', descripcion: 'vestido de modal', categoria: 'vestidos', stock: 6 },
                { id: 5, nombre: 'vestido largo', descripcion: 'vestido de morley', categoria: 'vestidos', stock: 6 },
                { id: 6, nombre: 'vestido negro', descripcion: 'vestido de bambula',categoria: 'vestidos', stock: 6 },
                { id: 7, nombre: 'chupin', descripcion: 'jean elastizado', categoria: 'pantalones', stock: 2 },
                { id: 8, nombre: 'oxford', descripcion: 'tiro alto', categoria: 'pantalones', stock: 2 },
                { id: 9, nombre: 'short', descripcion: 'elastizado con roturas', categoria: 'pantalones', stock: 2 }
            ]
            arrayDetalleItems=arrayDetalleItems.filter(item=> item.id === itemId);
            let myItem= arrayDetalleItems[0];
            setArrayDetalleItems(myItem);
        }, 2000)
    }, [itemId])

    return (
        <>
        {itemId}
        <ItemDetail arrayDetalleItems={arrayDetalleItems}/>
        <Link to={"/item/2"}> Ver Más Info</Link>
        
        </>
    );
}