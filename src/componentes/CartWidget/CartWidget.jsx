import React from 'react'
import carrito from "./iconoCarrito.png"

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="imagenCarrito"/>
            <p>5</p>
        </div>
    )
}

export default CartWidget