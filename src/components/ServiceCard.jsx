import { useCart } from '../context/CartContext.jsx'

export default function ServiceCard({ id, name, duration, price, description }) {
  const { addItem } = useCart()
  const wa = `https://wa.me/56940641465text=${encodeURIComponent(
    `Hola, quiero reservar ${name} (${duration}) por $${price.toLocaleString('es-CL')} CLP`
  )}`
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:8}}>
        <h3 style={{margin:'0 0 8px 0'}}>{name}</h3>
        <span className="badge">{duration}</span>
      </div>
      <p style={{color:'var(--muted)'}}>{description}</p>
      <p style={{margin:'8px 0 12px 0'}}><strong>${price.toLocaleString('es-CL')} CLP</strong></p>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <button className="btn" onClick={()=>addItem({ id, name, price })}>Agregar</button>
        <a className="btn" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>
  )
}
