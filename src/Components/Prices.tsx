type PriceRow = {
  package: string;
  quantity: string;
  price: string;
};

type PricesProps = {
  title?: string;
  rows: PriceRow[];
  separatorAfterRow?: number; // Índice después del cual va el separador
};

export default function Prices({ title, rows, separatorAfterRow }: PricesProps) {
  return (
    <div className="Prices">
      {title && <h2 className="Prices-title">{title}</h2>}
      
      <div className="Prices-container">
        {/* Encabezados */}
        <p className="Prices-packs">Paquetes</p>
        <p className="Prices-quantity">Cantidad</p>
        <p className="Prices-price">Precio</p>
        
        {/* Filas dinámicas */}
        {rows.map((row, index) => (
          <>
            <p className="Prices-packsname">{row.package}</p>
            <p className="Prices-duration">{row.quantity}</p>
            <p className="Prices-value">{row.price}</p>
            
            {/* Separador condicional */}
            {separatorAfterRow === index && (
              <hr className="Prices-divider1" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}