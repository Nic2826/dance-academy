import Prices from "./Prices";
import Schedule from "./Schedule";
export default function Group() {
  return (
    <div className="Group">
      <h2 className="Group-subtitle">Clases Grupales</h2>
      <div className="Group-container">
        <p className="Group-description">
          Clases energéticas y dinámicas donde bailas en grupo, te motivas con
          otras personas y disfrutas el proceso juntas. Son ideales para
          aprender, divertirte y conectar mientras avanzas a tu propio ritmo. Al
          final de cada clase usamos luces especiales que crean un ambiente
          seguro y te ayudan a sentirte más confiada y libre 💫.
        </p>

        <Schedule />
      </div>
      <div className="Prices-container">
        <Prices
          Package="Plan Básico"
          Price="$85.000"
          description="4 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Básico"
        />
        <Prices
          Package="Plan Premium"
          Price="$160.000"
          description="8 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Básico"
        />
        <Prices
          Package="1 Sola Clase"
          Price="$25.000"
          description="1 sola clase al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Básico"
        />
      </div>
    </div>
  );
}
