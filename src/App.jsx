import CompilaNota from "./components/CompilaNote/CompilaNota";
import ElencoTitoli from './components/ElencoNote/ElencoTitoli';
import { useState } from "react";
import "./App.css";
  
//Funzione principale
export default function App() {
  const [titoloNota, setTitoloNota] = useState();
  const [contenutoNota, setContenutoNota] = useState(); 

  return (
    <div className="App">
      <header className="messaggioDiBenvenuto">
        <p>Benvenuto, ecco qua il tuo blocco note!!!</p></header>
      <div className="contenitore">
        <ElencoTitoli 
          titolo={titoloNota}
          contenuto={contenutoNota}
          setTitolo={setTitoloNota}
          setContenuto={setContenutoNota}/>
        <CompilaNota
          titolo={titoloNota}
          contenuto={contenutoNota}
          setTitolo={setTitoloNota}
          setContenuto={setContenutoNota}
        />
      </div>
      <footer>
        <div>Questo è il mio primo lavoro in React</div>
      </footer>
    </div>
  );
}