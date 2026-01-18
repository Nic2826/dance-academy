
import Schedule from "./Schedule"
import Prices from "./Prices"
export default function ClassesInfo() {
  return (
    <div className="ClassesInfo">
        <div className="ClassesInfo-schedule"> 
        <h2 className="ClassesInfo-subtitle">Horario de Clases Grupales</h2>
        <Schedule />
        </div>
        
        <div className="ClassesInfo-prices"> 
        <h2 className="ClassesInfo-subtitle">Paquetes de Precios</h2>
        <Prices />
        </div>

        <button className="ClassesInfo-cta">👉 Click aquí para Reservar una clase 👈</button>
    </div>
  )
}
