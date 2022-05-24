import "./App.css";
import {
  Oppgave1,
  ReactQueryOppgave1,
  ReactQueryOppgave2,
} from "./Oppgaver";
import {
  Fasit1,
} from "./Fasit";
import { Eksempel1 } from "./Eksempler";

function Fasit() {
  return (
      <Fasit1 />
  );
}

function Eksempler() {
  return (
      <Eksempel1 />
  );
}

function Oppgaver() {
  return (
      <ReactQueryOppgave2 />
  );
}

function App() {
  return (
    <div className="App">
      <Eksempler />
      <Oppgaver />
      <Fasit />
    </div>
  );
}

export default App;
