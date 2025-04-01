export default function NotaSingola({setTitolo, setContenuto, titolo, contenuto}) {
    const visualizzaTitolo = () => {
        setTitolo(titolo);
        setContenuto(contenuto);
    }
    return(
        <div onClick={visualizzaTitolo}>
            {titolo}
        </div>
    )
}