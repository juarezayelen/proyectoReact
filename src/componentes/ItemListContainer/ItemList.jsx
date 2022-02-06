import React from "react";
import Item from "./Item";


export default function ItemList({arrayDeItems}) {
        
    return (
        <>
            <div className='ListaDeItems'>
                {arrayDeItems.map(item => <Item item={item}/>)}
            </div>
        </>
        
    )
    
}
