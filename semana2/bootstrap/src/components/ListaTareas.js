export default function ListaTareas(props) {
  console.log("entrando infoooooo");
  console.log(props);

  return (
    <div>
      <ul>
        {props.tareas.map((tar, i) =>  (
          <li key={i}>{tar}</li>
          ))}
      </ul>
    </div>
  );
}
