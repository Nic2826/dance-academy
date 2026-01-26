

export default function Booking() {
  return (
    <div className="Booking">
        <form action="" className="booking-form">
            <h2 className="booking-title">Book Your Dance Class</h2>
            <input type="text" placeholder="Nombre Completo" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Celular" />
            <input type="date" />
            <select name="Tipo de Clase" id="Tipo de Clase" aria-placeholder="Tipo de Clase">
                <option value="">Selecciona un tipo de clase</option>
                <option value="Ballet">Grupal</option>
                <option value="Contemporaneo">Personalizada</option>
            </select>
        </form>
    </div>
  )
}
