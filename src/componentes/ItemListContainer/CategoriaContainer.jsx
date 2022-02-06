import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import CategoriaDetail from "./CategoriaDetail";


export default function CategoriaContainer() {

    const { categoriaId } = useParams();
    const [arrayCategoriaItems, setArrayCategoriaItems]=useState({});
    useEffect(()=>{
        setTimeout(()=>{
            let arrayCategoriaItems = [ 
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
            arrayCategoriaItems=arrayCategoriaItems.filter(item=> item.categoria === categoriaId);
            let myItem= arrayCategoriaItems[0];
            setArrayCategoriaItems(myItem);
        }, 2000)
        //console.log(categoriaId)
    }, [categoriaId])

    return (
        <>
        
        <Link to="/categoria/remeras">Remeras</Link>
        <Link to={"/categoria/vestidos"}>Vestidos</Link>
        <Link to={"/categoria/pantalones"}>Pantalones</Link>
        Estoy en la categoria {categoriaId}
        <CategoriaDetail arrayCategoriaItems={arrayCategoriaItems}/>
        </>
    )


}