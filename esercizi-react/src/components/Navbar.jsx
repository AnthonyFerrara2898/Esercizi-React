import { Link } from "react-router-dom";
import Registrazione from "./Registrazione";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const {user} = useAuth();
  return (
    <div className="navbar">
      
      <Link to="/registrazione" element={<Registrazione></Registrazione>}>
        Registrati
      </Link>
      <br />
      {!user ? <Link to="/login">Login</Link> : <Link to="/dashboard">Dashboard</Link>}
       
    </div>
  );
}
