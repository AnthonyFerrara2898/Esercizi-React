import { Link } from "react-router-dom";
import Articolo from "./Articolo";
import articoli from "../dati/Articoli.jsx";

export default function Card({ titolo, immagine, paragrafo, data, id }) {
  return (
    <div className="card">
      <h4 className="titolo-card">{titolo}</h4>
      <img className="img" src={immagine} />
      <p className="parag-card">{paragrafo}</p>
      <Link to={`/Articolo/${id}`} className="link-card">Leggi di più...</Link>
      <p className="data">{data}</p>
    </div>
  );
}
