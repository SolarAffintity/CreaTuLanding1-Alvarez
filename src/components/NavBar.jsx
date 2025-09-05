import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartWidget from './CartWidget.jsx'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <nav className="nav-inner container">
        <NavLink to="/" className="nav-brand" onClick={()=>setOpen(false)}>
          <span style={{ fontWeight: 800 }}>Ayün Nahuen</span>
        </NavLink>

        <button className="nav-toggle" onClick={()=>setOpen(o=>!o)} aria-label="Abrir menú">
          ☰
        </button>

        <ul className={`nav-menu ${open ? 'open' : ''}`} onClick={()=>setOpen(false)}>
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/servicios">Servicios</NavLink></li>
          <li><NavLink to="/nosotros">Nosotros</NavLink></li>
          <li><NavLink to="/galeria">Galería</NavLink></li>
          <li><NavLink to="/carrito">Carrito</NavLink></li>
        </ul>

        <div className="nav-actions">
          <CartWidget />
        </div>
      </nav>
    </header>
  )
}


