import { Link } from "react-router-dom";

const Tarjetas = ({ ruta, titulo, descripcion, id, filtro }) => {
  return (
    <>
      <div className="card text-bg-danger mb-3" style={{ width: "18rem" }}>
        <img src={ruta} className="card-img-top" alt={titulo} title={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <Link className="btn btn-dark" to={`/detalle/${filtro}/${id}`}>
            Ver Mas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tarjetas;
