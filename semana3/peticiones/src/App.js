import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductoView from "./views/ProductoView";
import VistaPrincipal from "./views/VistaPrincipal";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VistaPrincipal />} />
          <Route exact path="/detalle/:id" element={<ProductoView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
