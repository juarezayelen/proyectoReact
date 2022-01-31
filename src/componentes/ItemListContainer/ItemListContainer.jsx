import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"

//En este archivo solo se carga el array

// const ItemGreeting = (props) => {
//     return (
//         <p>{props.greeting}</p>
//     )
// }


export default function ItemListContainer() {
    //const [listaDeItems, setListaDeItems]= useState([]);
    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeItems, setArrayDeItems] = useState([]);

    //Desafio usando promise

    const itemsEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido')

            resolve(
                [
                    { id: 1, nombre: 'item1', stock: 5 },
                    { id: 2, nombre: 'item2', stock: 6 },
                    { id: 3, nombre: 'item3', stock: 0 }
                ], 2000)

    });
})

    useEffect(() => {
        itemsEnStock
            .then(res => {

                setLlegoLaPromesa(true);
                setArrayDeItems(res);

                console.log(llegoLaPromesa);
                console.log(arrayDeItems);
            })

            .catch(err => {
                console.log('Error al recibir el array de items');
                console.log(err);
            });

    }, []);

    return (
        <>
        <ItemList arrayDeItems={arrayDeItems}/>

        </>
    );
}