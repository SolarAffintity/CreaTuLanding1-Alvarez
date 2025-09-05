import { useCart } from '../context/CartContext.jsx'

export default function Carrito(){
  const { items, removeItem, clear, total } = useCart()
  const mensaje = encodeURIComponent(
    `Hola, quiero agendar:\n` +
    items.map(i=>`• ${i.name} x${i.qty} - $${(i.price*i.qty).toLocaleString('es-CL')}`).join('\n') +
    `\nTotal: $${total.toLocaleString('es-CL')} CLP`
  )

  return (
    <>
      <header className="page"><div className="container"><h1>Carrito</h1></div></header>
      <section className="block">
        <div className="container">
          {items.length===0 ? (<p>Tu carrito está vacío.</p>) : (
            <>
              <table className="table">
                <thead><tr><th>Servicio</th><th>Cant.</th><th>Subtotal</th><th></th></tr></thead>
                <tbody>
                  {items.map(i=>(
                    <tr key={i.id}>
                      <td>{i.name}</td>
                      <td>{i.qty}</td>
                      <td>${(i.price*i.qty).toLocaleString('es-CL')}</td>
                      <td><button onClick={()=>removeItem(i.id)}>Quitar</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total: ${total.toLocaleString('es-CL')} CLP</h3>
              <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:12}}>
                <a className="btn" target="_blank" rel="noreferrer"
                   href={`https://wa.me/56912345678?text=${mensaje}`}>
                  Confirmar por WhatsApp
                </a>
                <button className="btn" onClick={clear}>Vaciar carrito</button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
