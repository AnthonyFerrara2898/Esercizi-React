import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// Importiamo il nostro hook useAuth che ci dà accesso all'utente loggato e alla funzione di logout

export default function Dashboard() {
  // Estraiamo 'user' e 'logout' dal context
  // 'user' contiene i dati dell'utente loggato e 'logout' è la funzione per fare logout
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function Handlelogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="dashboard-container">
      <h2>Dati Utente</h2>

      <p>
        <strong>Nome:</strong> {user.nome}
      </p>
      <p>
        <strong>Cognome:</strong> {user.cognome}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <Link to="/">Home</Link>
      <button onClick={Handlelogout}>Logout</button>
    </div>
  );
}
