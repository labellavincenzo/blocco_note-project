import React from "react"

export default function CompilaNota({titolo, contenuto, setTitolo, setContenuto}) { 
  
  const cambiaTitolo = (item) => {
    titolo = item.target.value;
    setTitolo(titolo);
  }
  
  const cambiaContenuto = (item) => {
    contenuto = item.target.value;
    setContenuto(contenuto);
  }
  
  
  return (
    <div className="parteTesto">
      <input type="text" onChange={cambiaTitolo} value={titolo} placeholder="Titolo" className="inserimentoTitolo"></input>
      <input type="text" onChange={cambiaContenuto} value={contenuto} placeholder="Contenuto" className="inserimentoTesto"></input>
    </div>
  )
}