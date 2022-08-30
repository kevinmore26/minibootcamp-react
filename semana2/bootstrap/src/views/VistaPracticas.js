import { useState } from "react";
import ListaTareas from "../components/ListaTareas";
export default function VistaPracticas() {
  //AQUI JS
  // const [estado,funcDelEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["pasear al perro"]);

  const anadirTarea = () => {
    setTareas([...tareas, "tomar desayuno"]);
  };

  const miTitulo = "Practicando ando";

  return (
    <div>
      <h1>{miTitulo}</h1>

      <ListaTareas tareas={tareas} />
      <button onClick={anadirTarea}> Añadir tarea</button>
    </div>
  );
}