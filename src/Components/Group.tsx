import Prices from "./Prices";
import Schedule from "./Schedule";
export default function Group() {
  return (
    <div className="Group" id="group">
      <h2 className="Group-subtitle">Clases Grupales</h2>
      <div className="Group-container">
        <p className="Group-description">
          Clases energéticas y dinámicas donde bailas en grupo, te motivas con
          otras personas y disfrutas el proceso juntas. Son ideales para
          aprender, divertirte y conectar mientras avanzas a tu propio ritmo. Al
          final de cada clase usamos luces especiales que crean un ambiente
          seguro y te ayudan a sentirte más confiada y libre 💫.

          <p className="Group-benefits">Beneficios:</p>

            <ul className="Group-benefits-list">
        <li>Ayuda a reducir el estrés y mejorar el estado de ánimo</li>
        <li>
          Creas vínculos y te sientes parte de una comunidad
        </li>
        <li>Favorece la conexión con tu cuerpo y tu feminidad</li>
        <li>
          Disfrutas de un ambiente seguro y sin juicios
        </li>
        <li>
          Aprendes y avanzas a tu propio ritmo
        </li>
      </ul>
        </p>

        

        <Schedule />

      </div>
      <div className="Prices-container">
        <Prices
          Package="1 Sola Clase"
          Price="$25.000"
          description="1 sola clase"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20una%20sola%20Clase%20Grupal"
        />

        <Prices
          Package="Plan Básico"
          Price="$85.000"
          description="4 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Básico%20Grupal"
        />
        <Prices
          Package="Plan Premium"
          Price="$160.000"
          description="8 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Premium%20Grupal"
        />
        
      </div>
    </div>
  );
}
