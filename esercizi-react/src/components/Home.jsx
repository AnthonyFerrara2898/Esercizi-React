import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import cards from "../dati/Cards.jsx";

export default function Home() {
  return (
    <div>
      <h1>D&D Wiki</h1>
      <Navbar></Navbar>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            titolo={card.titolo}
            immagine={card.immagine}
            paragrafo={card.paragrafo}
            data={card.data}
          ></Card>
        ))}
      </div>
    </div>
  );
}
