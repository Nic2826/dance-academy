export default function ClassesType() {
  return (
    <div className="ClassesType">
      <p className="ClassesType-title">Elige cómo quieres Bailar</p>
      <p className="ClassesType-description">
        Manejamos distintos tipos de clases:
        <span className="ClassesType-name"> Grupales y Personalizadas</span>,
        pensadas para distintos niveles y objetivos. Puedes elegir solo una o
        combinar ambas. Escríbenos y recibe asesoría personalizada para elegir
        la mejor opción según tus objetivos y necesidades.
      </p>

      <div className="ClassesType-container">
        <img 
        className="ClassesType-image" 
        src="/public/GRUPALES.png" 
        alt="" />
        
        <img
          className="ClassesType-image"
          src="/public/PERSONALIZADO.png"
          alt=""
        />

       

        {/* <h2 className="ClassesType-subtitle">PERSONALIZADAS</h2> */}
        {/* <p className="ClassesType-group-description">
          ¿Buscas una experiencia de aprendizaje más personalizada? Nuestras
          clases privadas están diseñadas para adaptarse a tus necesidades
          individuales, ya sea que quieras perfeccionar tu técnica, aprender
          nuevos estilos o simplemente disfrutar de una atención exclusiva.
          Puedes elegir el género que más te guste o combinar varios estilos de
          baile
        </p> */}
      </div>

      <a
        className="ClassesType-cta"
        href="https://wa.me/573144433845?text=Hola%2C%20quiero%20reservar%20una%20clase"
        target="_blank"
      >
        👉 Click aquí para Reservar una clase 👈
      </a>
    </div>
  );
}
