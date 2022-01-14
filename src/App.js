import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const ItemList = [
  { nombre: 'Home' , enlace: '/'},
  { nombre: 'Nosotros', enlace: '/nosotros'},
  { nombre: 'Productos', enlace: '/productos'},
  { nombre: 'Contacto', enlace: '/contacto'}
]
function App() {
  return (
    <div className='App'>
      <NavBar data = {ItemList}/>
      <ItemListContainer greeting="Bienvenido"/>

    </div>
    
  )
}

export default App