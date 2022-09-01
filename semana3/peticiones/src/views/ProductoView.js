import {useState, useEffect, } from "react"
import { useParams } from "react-router-dom"
//el useParams de react router dom sirve para obtener acceso a los datos de tu URL
//gracias al useParams me permitirá devolver el ID
import {obtenerProductoPorId} from "../services/productosServices"
export default function ProductoView(){
    const[producto,setProducto] = useState([])
    
    const {id} = useParams()
    const getProducto = async () =>{

        try{
            let productoObtenido = await obtenerProductoPorId(id)
            console.log(productoObtenido)
            setProducto(productoObtenido)
        }catch{
                console.log("error")
        }
    }
    useEffect(() => {
        getProducto()
      }, []);

    return(
        <div>


        </div>
    )
}