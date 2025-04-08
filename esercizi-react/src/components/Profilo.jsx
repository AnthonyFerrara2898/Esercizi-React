import { Link } from "react-router-dom";

export default function Profilo() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <p>Non hai un profilo?</p>
      <Link to="/registrazione">Registrati</Link>
    </div>
  );
}
