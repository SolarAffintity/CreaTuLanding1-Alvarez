const images = ['src/assets/1.png','src/assets/2.png','src/assets/3.png','src/assets/4.png','src/assets/6.png','src/assets/7.png','src/assets/8.png','src/assets/9.png']

export default function Galeria(){
  return (
    <>
      <header className="page"><div className="container"><h1>Galería</h1></div></header>
      <section className="block">
        <div className="container grid">
          {images.map((src,i)=>(
            <figure key={i} className="card col-3" style={{padding:8}}>
              <img src={src} alt={`Galería ${i+1}`} style={{width:'100%',borderRadius:12}} />
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
