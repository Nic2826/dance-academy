import Prices from "./Prices";
export default function PrivateClasses() {
  return (
    <div className="PrivateClasses" id="private">
      <h2 className="PrivateClasses-subtitle">Clases Personalizadas</h2>
      <div className="Private-container">
        <p className="PrivateClasses-description">
          ¿Buscas una experiencia de aprendizaje más personalizada? Nuestras
          clases privadas están diseñadas para adaptarse a tus necesidades
          individuales, ya sea que quieras perfeccionar tu técnica, aprender
          nuevos estilos o simplemente disfrutar de una atención exclusiva.
          Puedes elegir el género que más te guste o combinar varios estilos de
          baile
        </p>
        <p className="PrivateClasses-benefits">
          Beneficios:
        </p>
        <ul className="PrivateClasses-benefits-list">
          <li>Atención personalizada de instructores expertos.</li>
          <li>
            Flexibilidad en el horario para adaptarse a tus horarios y
            preferencias.
          </li>
          <li>
            Opportunidad de aprender de manera individual y personalizada.
          </li>
          <li>
            Acceso a una experiencia de aprendizaje exclusiva y personalizada.
          </li>
        </ul>
      
      <div className="Schedule-container">
<p>EL horario de las clases lo acordamos juntas por wpp</p>
      </div>
      </div>
      <div className="Prices-container">
        <Prices
          Package="1 Sola Clase"
          Price="$40.000"
          description="1 sola clase al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20una%20sola%20Clase%20Personalizada"
        />

        <Prices
          Package="Plan Básico"
          Price="$150.000"
          description="4 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Básico%20Personalizado"
        />
        <Prices
          Package="Plan Premium"
          Price="$270.000"
          description="8 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Premium%20Personalizado"
        />

        <Prices
          Package="Plan Gold"
          Price="$360.000"
          description="12 clases al mes"
          ctalink="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20el%20Plan%20Gold%20Personalizado"
        />
      </div>
    </div>
  );
}
