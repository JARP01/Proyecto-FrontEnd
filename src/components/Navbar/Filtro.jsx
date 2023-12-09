import "./filtro.css";
import { NavLink } from "react-router-dom";

const Filtro = ({ setFiltro }) => {
  return (

    
    <div className="contenedorfiltro">
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          aria-current="page"
          onClick={() => {
            setFiltro("comics");
          }}
          to={`/contenedor/comics`}
        >
          Comics
        </NavLink>
      </li>
      <li className="nav-item">

      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link active"
          onClick={() => {
            setFiltro("events");
          }}
          to={`/contenedor/events`}
        >
          Eventos Importantes
        </NavLink>
      </li>
    </div>
  );
};

export default Filtro;
