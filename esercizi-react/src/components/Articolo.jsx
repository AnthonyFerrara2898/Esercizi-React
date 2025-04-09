import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Articolo(){
  return(
    {cards.map((card, index) =>(
          key={index}
          titolo={card.titolo}
          immagine={card.immagine}
          paragrafo={card.paragrafo}
          data={card.data}
  ))}
  )
}

