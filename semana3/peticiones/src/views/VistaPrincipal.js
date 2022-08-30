import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosServices";
import GroupProducts from "../components/GroupProducts";
import Carrousel from "../components/Carrousel";
export default function VistaPrincipal() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos();
      console.log(productosObtenidos);
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Carrousel />
      <GroupProducts productos={productos} />
    </div>
  );
}
