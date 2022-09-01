import axios from "axios";

const URL = "https://630d696b109c16b9abe57acf.mockapi.io/productos";

//para utilizar await tengo que utilizarlo dentro de un bloque que sea async
const obtenerProductos = async () => {
  try {
    //intenta ejecutar este bloque de código
    let { data } = await axios.get(URL); //wait wait wait esperaaaa a que traiga mis productos
    return data;
  } catch (error) {
    //si hay errores captura el error
    console.log(error);
  }
};

const obtenerProductoPorId = async (id) => {
  try {
    //let {data} = await axios.get(`${URL}/${id}`)
    let { data } = await axios.get(
      `https://630d696b109c16b9abe57acf.mockapi.io/productos/${id}`
    );
    return data;
  } catch {
    console.log("errorrrrrrrr");
  }
};

export { obtenerProductos, obtenerProductoPorId };
