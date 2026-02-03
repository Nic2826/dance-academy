export default function Cards() {
  return (
    <div className="cards">
      {/* ------------------------CARD 1------------------------ */}
      <div className="card">
        <div className="cards-image">
          <img
            className="card-photo"
            src="public/images/baile.png"
            alt="dance-class"
          />
        </div>
        <h2 className="card-title">Descubre nuestras clases</h2>
        <ul className="card-content">
          <li className="card-item">Clases de Heels</li>
          <li className="card-item">Clases de Twerk</li>
          <li className="card-item">Talleres y eventos especiales</li>
        </ul>
      </div>

      {/* ------------------------CARD 2------------------------ */}
      <div className="card">
        <div className="cards-image">
          <img
            className="card-photo"
            src="public/images/comunidaddd.png"
            alt="dance-class"
          />
        </div>
        <h2 className="card-title">Únete a la comunidad</h2>
        <ul className="card-content">
          <li className="card-item">Espacio seguro solo para mujeres</li>
          <li className="card-item">Acceso a promociones exclusivas</li>
          <li className="card-item">Recibe info antes que nadie</li>
        </ul>
      </div>

      {/* ------------------------CARD 3------------------------ */}
      <div className="card">
        <div className="cards-image">
          <img
            className="card-photo"
            src="public/images/estrella.png"
            alt="dance-class"
          />
        </div>
        <h2 className="card-title">¿Qué ganas al unirte?</h2>
        <ul className="card-content">
          <li className="card-item">Conexión con tu energía femenina</li>
          <li className="card-item">Confianza dentro y fuera del salón</li>
          <li className="card-item">Tonificas y liberas estrés</li>
        </ul>
      </div>
    </div>
  );
}
