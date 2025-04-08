import { BrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registrazione from "./components/Registrazione";

function App() {
  return (
    <AuthProvider>

    <div>
      <h1>D&D Wiki</h1>
      <Navbar>  
        <BrowserRouter>
        <Routes>
         <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/registrazione" element={<Registrazione></Registrazione>}></Route>
          
        </Routes>
        </BrowserRouter>
      </Navbar>
       <div className="card-container">      
         <Card 
         className="card"
         titolo="Manuali D&D 2024: lista completa" 
         immagine={"https://support.mondadoristore.it/in/speciali/fantasticstore/dand/manuale.jpg"} 
         paragrafo={"In questa pagina potete trovare la lista completa dei Manuali di D&D 2024 e relative date di uscita. Se sarà presente, inserirò anche il..."}
         data={"20-09-2025"}>
         </Card>

         <Card 
         className="card"
          titolo="Sigil, il VTT 3d di Beyond già in crisi?"
          immagine={"https://www.telodoioildungeon.it/wp-content/uploads/2025/02/sigil-vtt-3d-animated-spells-1024x631.webp"}
          paragrafo={"Amici avventurieri, pare che il nuovo Sigil VTT 3D di Beyond sia già in crisi. Per ora non vi sono note ufficiali sul sito..."}
          data={"08-07-2018"}>
          </Card>
         <Card
          className="card"
         titolo="Incantesimi di Individuazione di D&D 5e" 
         immagine={"https://i.ytimg.com/vi/n4kkVxSNsBY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAlvXHXGO4rGdN-S7BIE7pHGk8s4A"} 
         paragrafo={"Amici impiccioni, se state giocando un'avventura investigativa potrebbe tornarvi comodo fare un ripasso degli incantesimi di individuazione.In questo articolo vi parlerò di Identificare, Individuazione..."}
         data={"06-12-2023"}>
         </Card>
         <Card 
         className="card"
         titolo="Warlock di D&D 2024: analisi" 
         immagine={"https://i.ytimg.com/vi/8VcqukPuBtY/maxresdefault.jpg"}
         paragrafo={"Amici notai, che non riuscite a giocare senza stipulare patti, oggi analizzo per voi la classe del Warlock della nuova edizione di D&D 2024...."}
         data={"14-03-2024"}>
         </Card>
       </div>

    </div>
    </AuthProvider>
  );
}
export default App;
