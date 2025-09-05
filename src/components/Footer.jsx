import "./Footer.css"

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Sobre Ayün Nahuen */}
        <section>
          <h2>Sobre Ayün Nahuen</h2>
          <p>
            En Ayün Nahuen te invitamos a vivir una experiencia de relajación y
            bienestar diseñada para reconectar contigo misma. Nuestros masajes
            terapéuticos y rituales de cuidado personal te ayudarán a liberar
            tensiones y renovar tu energía en un entorno acogedor.
          </p>
          <a href="/servicios" className="footer-btn">Leer más</a>
        </section>

        {/* Contacto */}
        <section>
          <h2>Contacto y Redes</h2>
          <dl>
            <dt>Dirección:</dt>
            <dd>La Florida • Santiago • Chile</dd>
            <dt>Teléfono:</dt>
            <dd>(+569) 40641465</dd>
            <dt>Email:</dt>
            <dd>
              <a href="mailto:Ayunnahuen@gmail.com">Ayunnahuen@gmail.com</a>
            </dd>
          </dl>

          <div className="social-icons">
            <a href="https://x.com/ayunnahuen" target="_blank">🐦</a>
            <a href="https://www.facebook.com/profile.php?id=61571548538477" target="_blank">📘</a>
            <a href="https://www.instagram.com/ayunnahuen" target="_blank">📸</a>
          </div>
        </section>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} Ayün Nahuen.</p>
    </footer>
  )
}
