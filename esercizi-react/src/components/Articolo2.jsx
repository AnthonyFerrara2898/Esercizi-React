export default function Articolo2(){
    return(
        <div>{user ? <p> </p> : <div><p>Hey non sei loggato?</p><Link to="/login">Accedi ora!</Link><span>Oppure</span><Link to="/registrati">Registrati ora!</Link></div>}</div>
    )
}