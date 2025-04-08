import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
       <div>      
         <Card 
         titolo="Manuali D&D 2024: lista completa" 
         immagine={"https://support.mondadoristore.it/in/speciali/fantasticstore/dand/manuale.jpg"} 
         paragrafo={""}
         data={""}>
         </Card>

         <Card 
          titolo="Sigil, il VTT 3d di Beyond già in crisi?"
          immagine={"https://www.telodoioildungeon.it/wp-content/uploads/2025/02/sigil-vtt-3d-animated-spells-1024x631.webp"}
          paragrafo={""}
          data={""}>
          </Card>
         <Card 
         titolo="Incantesimi di Individuazione di D&D 5e" 
         immagine={"https://i.ytimg.com/vi/n4kkVxSNsBY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlvXHXGO4rGdN-S7BIE7pHGk8s4A"} 
         paragrafo={""}
         data={""}>
         </Card>
         <Card 
         titolo="Warlock di D&D 2024: analisi" 
         immagine={"https://i.ytimg.com/vi/8VcqukPuBtY/maxresdefault.jpg"}
         paragrafo={""}
         data={""}>
         </Card>
       </div>

    </div>
  );
}
export default App;
