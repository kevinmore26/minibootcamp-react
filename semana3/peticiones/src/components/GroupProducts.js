export default function GroupProducts({ productos }) {
  console.log(productos);

  return (
    <div className="container">
      <div className="row mt-3">
        {productos.map((aquisealmacenacuandorecorremos, i) => (
          <div className="col-6 col-lg-3" key={i}>
            <div className="card mb-4">
              <img
                src={aquisealmacenacuandorecorremos.imagen}
                alt={aquisealmacenacuandorecorremos.imagen}
                className="card-img-top"
              />
              <div className="card-body">
                <h6 className="card-title">
                    {aquisealmacenacuandorecorremos.nombre}
                </h6>
                <span className="fw-bold">
                    S/{aquisealmacenacuandorecorremos.precio}
                </span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
