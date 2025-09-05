export default function Home(){
  return (
    <>
      <header className="page">
        <div className="container">
          <div className="grid">
            <div className="col-6">
              <h1>Bienvenidos</h1>
              <p>En Ayün Nahuen te invitamos a desconectar del estrés diario y reconectar con tu cuerpo y mente. Nuestros masajes están diseñados para brindarte relajación profunda, cuidado personalizado y armonía en cada sesión. Vive una experiencia única de bienestar, ya sea en nuestra sala acogedora o en la comodidad de tu hogar.</p>
              <a className="btn" href="/servicios">Ver Servicios</a>
            </div>
            <div className="col-6">
              <img className="image hero" src="src/assets/logo.png" alt="Ayün Nahuen" width={300}/>
            </div>
          </div>
        </div>
      </header>

      <section className="block">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="grid" style={{marginTop:16}}>
            <div className="card col-3"><strong>+100</strong><br/>Clientes Felices</div>
            <div className="card col-3"><strong>90 min</strong><br/>Promedio por sesión</div>
            <div className="card col-3"><strong>100%</strong><br/>Aceites Naturales</div>
            <div className="card col-3"><strong>90%</strong><br/>Mejora del Bienestar</div>
          </div>
        </div>
      </section>
    </>
  )
}
