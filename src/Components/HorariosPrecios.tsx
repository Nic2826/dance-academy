
import Schedule from "./Schedule"
import PricesGroup from "./PricesGroup"
import PrivateClasses from "./PrivateClasses"
import PricesPrivate from "./PricesPrivate"
export default function HorariosPrecios() {
  return (
    <div className="HorariosPrecios">
      <p className="HorariosPrecios-title">Horarios y Precios</p>
      <p className="HorariosPrecios-description">Manejemos 2 tipos de clases: Grupales y Privada, pensadas para distintos niveles y objetivos. Puedes elegir solo una o combinar ambas. Escríbenos y recibe asesoría personalizada para elegir la mejor opción según tus objetivos y necesidades.</p>
        <div className="HorariosPrecios-schedule"> 
        <h2 className="HorariosPrecios-subtitle">Clases Grupales</h2>
        <p className="HorariosPrecios-group-description"> Clases energéticas y dinámicas donde bailas en grupo, te motivas con otras personas y disfrutas el proceso juntas. Son ideales para aprender, divertirte y conectar mientras avanzas a tu propio ritmo. Al final de cada clase usamos luces especiales que crean un ambiente seguro y te ayudan a sentirte más confiada y libre 💫.</p>
        <Schedule />
        </div>
        
        <div className="HorariosPrecios-prices"> 
        <h2 className="HorariosPrecios-subtitle">Paquetes de Precios</h2>
        <PricesGroup />
        <PricesPrivate />
        </div>

        <a className="HorariosPrecios-cta" href="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20una%20clase" target="_blank">👉 Click aquí para Reservar una clase 👈</a>

<div className="HorariosPrecios-privateclasses">
<PrivateClasses />
</div>
        
    </div>
  )
}
