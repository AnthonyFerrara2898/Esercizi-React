import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <Link to="/profilo">Profilo</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
