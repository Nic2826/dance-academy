

// export default function Prices() {
//   return (
//     <div className="Prices">
//       <div className="Prices-container">
//         {/* <p className="Prices-oneclass">1 sola clase = 25mil</p> */}
//         <p className="Prices-packs">Paquetes</p>
//         <p className="Prices-packsname"> Paquete Básico </p>
//         <p className="Prices-quantity">Cantidad</p>
//         <p className="Prices-duration"> 4 clases al mes </p>
//         <p className="Prices-price">Precio</p>
//         <p className="Prices-value"> 85mil </p>
//         <span className="Prices-divider1"></span>
//         <p className="Prices-packsname"> Paquete Premium </p>
//         <p className="Prices-duration"> 8 clases al mes </p>
//         <p className="Prices-value"> 165mil </p>
//         <p className="Prices-packsname"> 1 sola clase </p>
//          <p className="Prices-duration"> 1 clase de Heels o Twerk </p>
//         <p className="Prices-value"> 25mil </p>
//         <p className="Prices-packsname"> Alquiler de Rodilleras </p>
//          <p className="Prices-duration"> 1 par de rodilleras</p>
//         <p className="Prices-value"> 5mil </p>
//       </div>
//     </div>
//   );
// }


import Prices from "./Prices"

export default function PricesPrivate() {
  const pricesData = [
    {
      package: "Paquete Básico",
      quantity: "4 clases al mes",
      price: "85mil"
    },
    {
      package: "Paquete Premium",
      quantity: "8 clases al mes",
      price: "165mil"
    },
    {
      package: "1 sola clase",
      quantity: "1 clase de Heels o Twerk",
      price: "25mil"
    },
    {
      package: "Alquiler de Rodilleras",
      quantity: "1 par de rodilleras",
      price: "5mil"
    }
  ];

  return (
    <Prices
      title="Clases GRUPALES"
      rows={pricesData}
      separatorAfterRow={1} // El separador aparece después de la fila con índice 1 (Paquete Premium)
    />
  );
}