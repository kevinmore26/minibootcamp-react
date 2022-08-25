import { useState } from "react";

export default function VistaPracticas2() {
  //AQUI JS
  // const [estado,funcDelEstado] = useState(estadoInicial)
  const [lista, setLista] = useState(["Camilo", "Carlos", "Héctor", "Jorge"]);

  return (
    <div>
      <h1>VistaPracticas</h1>
      {lista.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
