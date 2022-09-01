import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
//el useParams de react router dom sirve para obtener acceso a los datos de tu URL
//gracias al useParams me permitirá devolver el ID
import { obtenerProductoPorId } from "../services/productosServices";
import Swal from "sweetalert2"

export default function ProductoView() {
  const [producto, setProducto] = useState([]);
  const navigate = useNavigate()
  const { id } = useParams();

  const getProducto = async () => {
    try {
      let productoObtenido = await obtenerProductoPorId(id);
      console.log(productoObtenido);
      setProducto(productoObtenido);
    } catch {
      console.log("error");
    }
  };

  const añadirCarrito = () =>{ 
        const resultado = Swal.fire({
            icon:"success",
            title:"Producto añadido",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:"Seguir comprando",
            denyButtonText:"Ir al carrito"
        })
        .then((resultado)=>{
            if(resultado.isConfirmed){
                navigate("/")
            }
        })
       
  }

  useEffect(() => {
    getProducto();
  }, []);
  console.log("producto");
  console.log(producto);
  return (
    <div>
      <div className="container">
        <h2 className="fw-bold">{producto.nombre}</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="img-fluid" src={producto.imagen} />
          </div>
          <div className="col-sm-12 col-md-6">
            <h5>Descripción</h5>
            <p>{producto.descripcion}</p>
            <div className="py-3 d-flex justify-content-between">
              <span className="fw-bold">S/{producto.precio}</span>
              <button className="btn btn-dark" onClick={añadirCarrito}>
                  AÑADIR AL CARRITO 
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
