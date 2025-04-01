import NotaSingola from "./NotaSingola";
import { useSelector } from "react-redux";

export default function ElencoDelleNote({
  setTitolo,
  setContenuto
}) {
  const noteRedux = useSelector((state) => state.note.note); //Sto pushando volta per volta note dentro lo stato di note

  return (
    <div>
      {noteRedux.map((item, index) => {
        return (
          <NotaSingola 
            titolo={item.titolo} 
            contenuto={item.contenuto} 
            setTitolo={setTitolo} 
            setContenuto={setContenuto}
            key={index}/>
        );
      })}
    </div>
  );
}