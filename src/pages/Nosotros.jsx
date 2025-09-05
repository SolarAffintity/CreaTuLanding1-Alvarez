export default function Nosotros(){
  return (
    <>
      <header className="page"><div className="container"><h1>Nosotros</h1></div></header>
      <section className="block">
        <div className="container" style={{display:'grid',gap:24,gridTemplateColumns:'1fr 1fr'}}>
          <div>
            <p>Somos un espacio creado para cuidar de ti. En Ayün Nahuen combinamos técnicas de masajes tradicionales y modernas, aceites esenciales y tratamientos personalizados para cada necesidad. Nuestro objetivo es que cada mujer, mamá o ejecutiva encuentre un momento de descanso y renovación. Nos apasiona generar bienestar y tranquilidad, ofreciendo un servicio cercano, profesional y adaptado a tu ritmo de vida.</p>
          </div>
          <img src="src/assets/AYUN NAHUEN.png" alt="Ayün Nahuen" style={{width:'100%',borderRadius:16,border:'1px solid #eee'}}/>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{display:'grid',gap:24,gridTemplateColumns:'1fr 1fr'}}>
          <div>
             <h3>Valentina</h3>
            <p> Con más de 7 años de experiencia en el área de la salud, se ha especializado en masajes de relajación y bienestar femenino.
            Su enfoque combina técnicas de masaje terapéutico y fisioterapia para aliviar tensiones musculares, mejorar la movilidad y promover la recuperación corporal integral.
            Su trato cercano y profesional ha ayudado a muchas mujeres a reconectarse con su equilibrio físico y emocional en un entorno seguro y acogedor.</p>
          </div>
          <img src="src/assets/AYUN NAHUEN.png" alt="Ayün Nahuen" style={{width:'100%',borderRadius:16,border:'1px solid #eee'}}/>
        </div>
      </section>

      <section className="block">
        <div className="container" style={{display:'grid',gap:24,gridTemplateColumns:'1fr 1fr'}}>
          <div>
             <h3>Constanza</h3>
            <p> Encargada de organizar las citas, gestionar las reservas y asegurar que cada clienta tenga una experiencia personalizada desde el primer contacto.
            También ofrece masajes relajantes y terapias de bienestar enfocadas en aliviar el estrés diario. Su empatía y calidez hacen que cada sesión sea
            un momento de cuidado profundo, ideal para mujeres con rutinas exigentes o necesidad de reconectar consigo mismas.</p>
          </div>
          <img src="src/assets/AYUN NAHUEN.png" alt="Ayün Nahuen" style={{width:'100%',borderRadius:16,border:'1px solid #eee'}}/>
        </div>
      </section>
    </>
  )
}
