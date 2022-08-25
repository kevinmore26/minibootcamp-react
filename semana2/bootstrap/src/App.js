import { Route, BrowserRouter, Routes } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import VistaSecundaria from "./views/vistaSecundaria";
export default function App() {
  return (
    <div>
      {/* este browsrouter vendría ser el react-router-dom */}
      <BrowserRouter>
        {/* el routeS va verificar qué ruta necesitamos y qué componente vamos a usar */}
        <Routes>
          <Route exact path="/" element={<VistaPrincipal />}></Route>
          <Route
            exact
            path="/vistasecundaria"
            element={<VistaSecundaria />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 
{
  /* shift + alt + F */
}
