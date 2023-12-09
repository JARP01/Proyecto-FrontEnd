import { Link } from "react-router-dom";

const TarjetasC = ({ ruta, titulo, descripcion, id, filtro }) => {
  return (
    <>
      <div className="card text-bg-success mb-3" style={{ width: "18rem" }}>
        <img src={ruta} className="card-img-top" alt={titulo} title={titulo} />
        <div className="card-body">
            
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>

        </div>
      </div>
    </>
  );
};

export default TarjetasC;