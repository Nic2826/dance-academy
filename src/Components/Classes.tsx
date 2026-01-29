import DriveVideo from "./Video";

export default function () {
  return (
    <div className="Classes" id="classes">
      <h2 className="Classes-title">Clases de Baile</h2>
      <p className="Classes-description">
        En nuestra academia ofrecemos 2 estilos de baile: 
        <span className="Classes-name"> Heels y Twerk</span>, son
        estilos diferentes pero complementarios entre ellos que buscan empoderar
        a las mujeres que eligen moverse desde el disfrute, la feminidad y la
        libertad, sin juicios y a su propio ritmo. Descubre un poco más sobre
        cada estilo, elige tu favorito o… ¿por qué no? ¡ambos! Muchas alumnas los
        combinan para tener una experiencia más completa.💃 Nos vemos en
        clase ✨
      </p>

      <div className="Classes-container">
        <DriveVideo
          videoId="1cXw36nt58cYyV3-h7MiwBRkg8j0xSLIx"
          width="500"
          height="300"
        />

        <div className="Classes-text-container">
          <p className="Classes-subtitle"> Heels 👠</p>

          <p className="Classes-description-container">
             Heels Es un estilo de baile que se realiza con tacones, enfocado
            en: Postura y elegancia Fuerza y control corporal Caminadas, líneas
            y actitud Conexión con la sensualidad desde la presencia
          </p>

          <p className="Classes-description-container">
            <span className="Classes-benefits ">Beneficios: </span>
            Mejora tu postura y equilibrio Aumenta la confianza y seguridad Te
            ayuda a expresarte con fuerza y elegancia 👉 Ideal si te gusta
            sentirte poderosa, femenina y segura.
          </p>
        </div>
      </div>

      <div className="Classes-container">
        <div className="Classes-text-container">
          <p className="Classes-subtitle">Twerk 🍑</p>

          <p className="Classes-description-container">
             Twerk Es un estilo de baile enfocado en el movimiento de caderas
            y glúteos, que se puede bailar sin tacones y se caracteriza por:
            Movimientos rápidos y rítmicos Trabajo de piernas y zona baja del
            cuerpo Mucha energía, goce y liberación
          </p>

          <p className="Classes-description-container">
            <span className="Classes-benefits">Beneficios: </span>
            Tonifica piernas y glúteos Libera estrés y bloqueos
            Conecta con tu cuerpo desde el disfrute 👉 Ideal si quieres
            soltarte, divertirte y sentirte libre.
          </p>
        </div>
        <DriveVideo
          videoId="1WNfMtFHSQAB_AICAyUMVsN-xxDqijvWC"
          width="500"
          height="300"
        />
      </div>

      {/* <p className="Classes-description">
        ¿Heels o Twerk? No tienes que escoger solo uno 😉 Muchas alumnas
        combinan ambos para tener una experiencia más completa.
      </p> */}

      {/* <img className="Classes-image" src="/public/Heels-vs-Twerk.png" alt="" /> */}

      <p className="Classes-cta">
        ¿No sabes cuál elegir?
        <br />
        Escríbenos y te ayudamos a encontrar tu estilo.
      </p>
      <div className="Classes-whatsapp">
      <img className="Classes-whatsapp-icon" src="/public/whatsapp.png" alt="" />
      <p className="Classes-whatsapp-number">314 443 3845</p>
      </div>
    </div>
  );
}
