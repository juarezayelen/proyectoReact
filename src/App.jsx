import './App.css';
import React from "react";
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/ItemListContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CategoriaContainer from './componentes/ItemListContainer/CategoriaContainer';

const menu = [
  { nombre: 'Home', enlace: '/' },
  { nombre: 'Remeras', enlace: '/remeras' },
  { nombre: 'Vestidos', enlace: '/vestidos' },
  { nombre: 'Pantalones', enlace: '/pantalones' },
  { nombre: 'Contacto', enlace: '/contacto' }
]
export default function App() {
  return (
    <>
      <BrowserRouter>

        <Switch>

          {/* ruta home */}
          <Route exact path="/">
            <div className='App'>
              <NavBar data={menu} />
            </div>
            <ItemListContainer />
          </Route>



          <Route path="/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route path="/categoria/:categoriaId">
             <CategoriaContainer />
          </Route>

          <Route exact path="/contacto">
            Contáctenos y le responderemos a la brevedad
          </Route>
        </Switch>
      </BrowserRouter>
    </>


  )
}