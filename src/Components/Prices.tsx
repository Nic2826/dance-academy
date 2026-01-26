type PricesProps = {
  Package?: string;
  Price?: string;
  description?: string;
  ctalink?: string;
  separatorAfterRow?: number; // Índice después del cual va el separador
};

export default function Prices({ Package, Price, description, ctalink }: PricesProps) {
  return (
    <div className="Prices">
      <div className="Prices-package-container">
        <p className="Prices-package">{Package}</p>
        </div>
      
      <p className="Prices-value">{Price}</p>
      <p className="Prices-description">{description}</p>
      <a className="Prices-cta" href={ctalink}>Comprar</a>
    </div>
  );
}