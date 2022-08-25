import { Route, BrowserRouter, Routes } from "react-router-dom";
import VistaPracticas2 from "./views/VistaPractica2";
import VistaPracticas from "./views/VistaPracticas";
import VistaPrincipal from "./views/VistaPrincipal";
import VistaSecundaria from "./views/vistaSecundaria";
export default function App() {
  return (
    <div>
      {/* este browsrouter vendría ser el react-router-dom */}
      <BrowserRouter>
        {/* el routeS va verificar qué ruta necesitamos y qué componente vamos a usar */}
        <Routes>
          <Route exact path="/" element={<VistaPrincipal />} />
          <Route exact path="/vistasecundaria" element={<VistaSecundaria />} />
          <Route exact path="/vistapracticas" element={<VistaPracticas />} />
          <Route exact path="/vistapractica2" element={<VistaPracticas2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
{
  /* shift + alt + F */
}
