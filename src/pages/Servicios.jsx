import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Servicios(){
  return (
    <>
      <header className="page">
        <div className="container"><h1>Servicios</h1></div>
      </header>
      <section className="block">
        <div className="container">
          <div className="grid">
            {services.map(s => (
              <div className="col-4" key={s.id}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

