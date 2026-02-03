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

<a href="#group" className="ClassesType-link">
        <img 
        className="ClassesType-image" 
        src="public/images/GRUPALES.png" 
        alt="" /></a>

        <a href="#private" className="ClassesType-link">
        
        <img
          className="ClassesType-image"
          src="public/images/PERSONALIZADO.png"
          alt=""
        /></a>
   
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
