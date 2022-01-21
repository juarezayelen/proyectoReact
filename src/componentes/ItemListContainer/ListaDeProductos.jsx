import React, { useState, useEffect } from "react";
import Producto from "./Producto";

export default function ListaDeProductos() {


    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    //Desafio usando promise

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido')

            resolve(
                [
                    { nombre: 'item1', stock: 5 },
                    { nombre: 'item2', stock: 6 },
                    { nombre: 'item3', stock: 0 }
                ], 2000)

    });
})

    useEffect(() => {
        productosEnStock
            .then(res => {
                
                setLlegoLaPromesa(true);
                setArrayDeProductos(res);
                
                console.log(llegoLaPromesa);
                console.log(arrayDeProductos);
            })

            .catch(err => {
                console.log('Error al recibir el array de productos');
                console.log(err);
            });

    }, []);

    return (
        <>
            {(llegoLaPromesa) ?
        
            <>
            {
                arrayDeProductos.map(item=>{
                 return <Producto item={item} /> })}</>
                

            :
            <>Loading...</> 
            }
           
        </>
        
    )
    
}