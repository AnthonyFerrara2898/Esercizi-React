import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <p>{articolo.paragrafo}</p>
    </div>
  );
}
