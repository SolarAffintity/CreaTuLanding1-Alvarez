import { useCart } from '../context/CartContext.jsx'
import { NavLink } from 'react-router-dom'

export default function CartWidget() {
  const { count } = useCart()
  return (
    <NavLink to="/carrito" className="btn" aria-label="Carrito">
      🛒 Carrito <span className="badge">{count}</span>
    </NavLink>
  )
}
