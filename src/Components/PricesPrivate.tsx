import Prices from "./Prices";

export default function PricesPrivate() {
  const pricesData = [
    {
      package: "1 sola clase",
      quantity: "1 clase de Heels o Twerk",
      price: "40mil",
    },
    {
      package: "Paquete Básico",
      quantity: "4 clases al mes",
      price: "150mil",
    },
    {
      package: "Paquete Premium",
      quantity: "8 clases al mes",
      price: "270mil",
    },
    {
      package: "Paquete Gold",
      quantity: "12 clases al mes",
      price: "360mil",
    },

    {
      package: "Alquiler de Rodilleras",
      quantity: "1 par de rodilleras",
      price: "5mil",
    },
  ];

  return (
    <Prices
      title="Clases PERSONALIZADAS"
      rows={pricesData}
      separatorAfterRow={1} // El separador aparece después de la fila con índice 1 (Paquete Premium)
    />
  );
}
