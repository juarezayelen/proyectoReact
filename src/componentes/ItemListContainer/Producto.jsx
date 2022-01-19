import react from "react";
import MasMenos from "./MasMenos";

export default function Producto({item}){

    function onAdd(){
        alert(item.nombre + '' + item.stock);
    }
    
    
    return(
        <>Producto:
            <p>{item.nombre}</p>
            <p>{item.stock}</p>
            <div onClick={()=>onAdd()}>Agregar al Carrito</div>
            <MasMenos tope={item.stock} />
            <br />
            <br />
        </>
    )
}