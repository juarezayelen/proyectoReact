import React, {useState} from "react";

export default function MasMenos({tope}){

    const [cantidad, setCantidad] = useState(0); //estado para la suma
    const [cantidadR, setCantidadR] = useState(0); //estado para la resta
    const [desactivado, setDesactivado] = useState(false); //estado deshabilitado cuando el stock es cero

    function sumar(){ //Función que agrega un producto al carrito si la cantidad es < al tope
        let aux = cantidad;

        if (aux < tope){
            aux = aux + 1;
        }
        setCantidad(aux);
    }

    function restar(){ //Función que elimina un producto del carrito si la cantidadR es >= al init
        let aux = cantidadR;

        if (0 < aux <= tope){
            aux = aux - 1;
        }
        setCantidadR(aux);
    }

    function sinStock(){ //Si el stock está en cero, no se puede agregar el producto al carrito

        if (tope=0){
            setDesactivado(true);
        }else{
            setDesactivado(false)
        };
        
    }

    return(
        <>
        <span onClick={()=>restar()}>-</span>
        <span onClick={()=>sinStock()}>{cantidad}</span>
        <span onClick={()=>sumar()}>+</span>
        <br />
        
        </>
    )
}