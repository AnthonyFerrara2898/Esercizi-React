import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Card({ titolo, immagine, paragrafo, data }) {
  const {user} = useAuth()
  return (

    <div className="card">
      <h4 className="titolo-card">{titolo}</h4>
      <img className="img" src={immagine} />
      <p className="parag-card">{paragrafo}</p>
      {user ? <Link to={`/Articolo${index}`}>Leggi di più...</Link> : <Link to="/login">Leggi di più...</Link>}
    <p className="data">{data}</p>
    </div>

  );
}
