import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registrazione from "./components/Registrazione";
import AuthProvider from "./context/AuthContext";
import cards from "./dati/Cards";
import Profilo from "./components/Profilo";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          {/* creare un componente articolo che renderizza il dettaglio dell'articolo in base all id passato  */}
          <Route path="/Articolo/:id" element={<></>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>

          <Route
            path="/registrazione"
            element={<Registrazione></Registrazione>}
          ></Route>
        </Routes>
        <div>
          <h1>D&D Wiki</h1>
          <Navbar>
            <Route path="/profilo" element={<Profilo></Profilo>}></Route>
          </Navbar>
          <div className="card-container">
            {cards.map((card, index) => (
              <Card
                key={index}
                titolo={card.titolo}
                immagine={card.immagine}
                paragrafo={card.paragrafo}
                data={card.data}
              ></Card>
            ))}
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
