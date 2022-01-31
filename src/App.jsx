import './App.css';
import React from "react";
import NavBar from './componentes/NavBar/NavBar';
import ItemList from './componentes/ItemListContainer/ItemList';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './componentes/ItemListContainer/ItemDetailContainer';


const menu = [
  { nombre: 'Home' , enlace: '/'},
  { nombre: 'Nosotros', enlace: '/nosotros'},
  { nombre: 'Productos', enlace: '/productos'},
  { nombre: 'Contacto', enlace: '/contacto'}
]
export default function App() {
  return (
    <div className='App'>
      <NavBar data = {menu}/>
      <ItemListContainer greeting="Bienvenido"/>
      <ItemList />
      <ItemDetailContainer />

    </div>
    
  )
}