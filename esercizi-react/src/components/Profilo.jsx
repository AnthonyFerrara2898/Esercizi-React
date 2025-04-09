import { Link } from "react-router-dom";
import Registrazione from "./Registrazione";
import Login from "./Login";

export default function Profilo() {
  return (
    <div>
      <Link to="/login" element={<Login />}>
        Login
      </Link>
      <p>Non hai un profilo?</p>
      <Link to="/registrazione" element={<Registrazione />}>
        Registrati
      </Link>
    </div>
  );
}
