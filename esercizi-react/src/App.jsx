import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Registrazione from "./components/Registrazione";
import AuthProvider from "./context/AuthContext";
import Articolo from "./components/Articolo";
import Home from "./components/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          {/* creare un componente articolo che renderizza il dettaglio dell'articolo in base all id passato  */}
          <Route path="/Articolo/:id" element={<Articolo></Articolo>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>

          <Route
            path="/registrazione"
            element={<Registrazione></Registrazione>}
          ></Route>

          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
