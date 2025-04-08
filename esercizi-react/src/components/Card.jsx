export default function Card({titolo, immagine, paragrafo, data}){
    return(
        <div>
            <h4 className="titolo-card">{titolo}</h4>
            <img className="img" src={immagine}/>
            <p className="parag-card">{paragrafo}</p>
            <p className="data">{data}</p>
            
        </div>
    )
}