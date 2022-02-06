import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";



//En este archivo solo se carga el array

export default function ItemListContainer() {
    
    
    const [arrayDeItems, setArrayDeItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setArrayDeItems(
                [
                    { id: 1, nombre: 'remera brillos', categoria: 'remeras', stock: 5 },
                    { id: 2, nombre: 'remera roja', categoria: 'remeras', stock: 5 },
                    { id: 3, nombre: 'remera azul', categoria: 'remeras', stock: 5 },
                    { id: 4, nombre: 'vestido corto', categoria: 'vestidos', stock: 6 },
                    { id: 5, nombre: 'vestido largo', categoria: 'vestidos', stock: 6 },
                    { id: 6, nombre: 'vestido negro', categoria: 'vestidos', stock: 6 },
                    { id: 7, nombre: 'chupin', categoria: 'pantalones', stock: 2 },
                    { id: 8, nombre: 'oxford', categoria: 'pantalones', stock: 2 },
                    { id: 9, nombre: 'short', categoria: 'pantalones', stock: 2 }
                ])
                
            }, 2000)

    }, [])

    return (
        <>
        <div className='array'>
        <ItemList arrayDeItems={arrayDeItems}/>
       
        </div>
        </>
    );
}