import { Route, BrowserRouter, Routes } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VistaPrincipal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
