import { Link } from "react-router-dom";

export default function Card({ titolo, immagine, paragrafo, data }) {
  
  return (
    <div className="card">
      <h4 className="titolo-card">{titolo}</h4>
      <img className="img" src={immagine} />
      <p className="parag-card">{paragrafo}</p>
      <Link to="/Articolo">Leggi di più...</Link>
      <p className="data">{data}</p>
    </div>
  );
  
}
