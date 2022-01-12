import React from "react";

export default function NavBar() {
    return (
        <>
            <div className="nav" id="navbar">
                <div>
                    <a class="nav-link active"  href="index.html" target="_self">Inicio</a>
                    <br />
                    <a class="nav-link" href="QuienesSomos.html" target="_self">Nosotros</a>
                     <br />
                    <a class="nav-link" href="Productos.html" target="_self">Productos</a>
                    <br />
                    <a class="nav-link" href="Contacto.html" target="_self">Contacto</a>
                    
                </div>
            </div>
        </>
    )
}