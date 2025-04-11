import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import articoli from "../dati/Articoli.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Registrazione from "./Registrazione.jsx";

export default function Articolo() {
  const { user } = useAuth();
  const { id } = useParams();
  const [articolo, setArticolo] = useState([]);
  useEffect(() => {
    const articoloSelezionato = articoli.find((x) => x.id === parseInt(id));
    setArticolo(articoloSelezionato);
  }, []);
  return (
    <div>
      {user ? (
        <div>
          <img className="immagine-articolo" src={articolo.immagine} />
          <p className="parag-articolo">{articolo.paragrafo}</p>
          <Link to="/">Home</Link>
        </div>
      ) : (
        <div className="nologged">
          <p>
            Per leggere l'articolo devi essere registrato o aver effettuato
            l'accesso
          </p>
          <div className="nologged-link">
            <Link to="/registrazione" element={<Registrazione></Registrazione>}>
              Registrati
            </Link>

            <Link to="/login">Login</Link>

            <Link to="/">Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}
