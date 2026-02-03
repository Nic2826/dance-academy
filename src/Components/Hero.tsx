
import arrows from '../assets/flecha.png';
export default function hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-overlay"></div>
      <h1 className="hero-title">Bienvenida</h1>
      <p className="hero-description">Descrubre tu Diosa interior y empoderate con nuestras clases de baile. </p>
      <img className="hero-arrows" src={arrows} alt="flechas" />
    </div>
  )
}
