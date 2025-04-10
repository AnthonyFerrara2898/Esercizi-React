import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import articoli from "../dati/Articoli.jsx";

export default function Articolo() {
  const { id } = useParams();
  const [articolo, setArticolo] = useState([]);
  useEffect(() => {
    const articoloSelezionato = articoli.find((x) => x.id === parseInt(id));
    setArticolo(articoloSelezionato);
  }, []);
  return (
    <div>
      <img className="immagine-articolo" src={articolo.immagine}/>
      <p className="parag-articolo">{articolo.paragrafo}</p>
      <Link to="/">Home</Link>
    </div>
  );
}
