import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Galeria from './pages/Galeria.jsx'
import Carrito from './pages/Carrito.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  )
}
