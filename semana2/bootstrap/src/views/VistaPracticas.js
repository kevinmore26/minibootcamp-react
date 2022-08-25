import { useState } from "react";

export default function VistaPracticas() {
  //AQUI JS
  // const [estado,funcDelEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState([]);

  const anadirTarea = () => {
    setTareas(["tomar desayuno"]);
  };

  return (
    <div>
      <h1>VistaPracticas</h1>
      <hr></hr>
      {tareas}
      <button onClick={anadirTarea}> Añadir tarea</button>
    </div>
  );
}
