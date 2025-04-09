import { Link } from "react-router-dom";
import Registrazione from "./Registrazione";
import Login from "./Login";

export default function Navbar() {
  return (
    <div>
      <Link to="/registrazione" element={<Registrazione></Registrazione>}>
        Registrati
      </Link>
      <br />
      <Link to="/login" element={<Login></Login>}>
        Login
      </Link>
    </div>
  );
}
