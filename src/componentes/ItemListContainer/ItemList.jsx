import React from "react";
import Item from "./Item";

// export default function ItemList({arrayDeItems},{llegoLaPromesa}) {

export default function ItemList({arrayDeItems}) {
        
    return (
        <>
            { arrayDeItems.map(item => <Item item={item}/>)}
        </>
        
    )
    
}
