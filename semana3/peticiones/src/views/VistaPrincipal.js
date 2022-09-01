import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosServices";
import GroupProducts from "../components/GroupProducts";
import Carrousel from "../components/Carrousel";
import Loading from "../components/Loading";
export default function VistaPrincipal() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos();
      console.log(productosObtenidos);
      setProductos(productosObtenidos);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      {cargando ? (
        <Loading />
      ) : (
        <div>
          <Navbar></Navbar>
          <Carrousel />
          <GroupProducts productos={productos} />
        </div>
      )}
    </div>
  );
}
