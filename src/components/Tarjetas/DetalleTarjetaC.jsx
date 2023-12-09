import "./detalle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetalleTarjetaC = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();
  const ts = 2;
  const key ="320eb76cfe487db609c8392261b2afca";
  const hash = "7c35834cfa5c6dff86b5767c8710eac4";
  const url = `https://gateway.marvel.com/v1/public/events/${id}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDetalle(respuesta.data.data.results[0]);
      } catch (error) {
        console.error("hubo un error: ", error);
      }
    };
    solicitud();
  }, []);
  if (!detalle || !detalle.thumbnail) {
    return (
      <div className="text-center loading">
        <div
          className="spinner-border text-secondary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="contenedordetalle">
      <div className="contenedorimg">
        <img
          src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`}
          alt=""
          className="img"
        />
      </div>
      <div className="contenedortitulo">
        <h2>{detalle.title}</h2>
        <h3>Fecha de publicación:</h3>
        <p>{detalle.dates[0].date}</p>
      </div>
    </main>
  );
};



export default DetalleTarjetaC;