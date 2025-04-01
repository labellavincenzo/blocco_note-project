import Titolo from "../Titolo";
import React from "react";
import ElencoDelleNote from "./ElencoDelleNote";
import { useDispatch } from "react-redux";
import { setNote } from "../Redux/reducers/noteReducer";

const titoloDelleNote = "Elenco note";

export default function ElencoTitoli({
  titolo,
  contenuto,
  setTitolo,
  setContenuto,
}) {

  const dispatchNote= useDispatch()
  const aggiungiNota = () => {
    dispatchNote(setNote({titolo:titolo, contenuto:contenuto}))
  }


  return (
    <div className="parteNote">
      <Titolo titoloNote={titoloDelleNote} />
      <button type="button" onClick={aggiungiNota}>Inserisci nota</button>
      <ElencoDelleNote
        setTitolo={setTitolo}
        setContenuto={setContenuto}
      />
    </div>
  );
}
