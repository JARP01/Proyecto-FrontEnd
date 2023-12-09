import "./contenedortarjeta.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Tarjetas from "../Tarjetas/Tarjetas";

const ContenedorTarjeta = ({ filtro }) => {
  const login = localStorage.getItem("login");
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key ="320eb76cfe487db609c8392261b2afca";
  const hash = "7c35834cfa5c6dff86b5767c8710eac4";
  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
    };
    solicitud();
  }, [url]);

  return (
    <>
      {}
      <main className="contenedor">
        {datos.length === 0 ? (
          <div className="text-center loading">
            <div
              className="spinner-border text-secondary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          datos.map((item) => (
            <Tarjetas
              key={item.id}
              ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
              titulo={item.title}
              descripcion={item.description}
              filtro={filtro}
              id={item.id}
            />
          ))
        )}
      </main>
    </>
  );
};



export default ContenedorTarjeta;
