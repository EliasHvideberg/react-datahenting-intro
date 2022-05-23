import "./App.css";
import {
  Oppgave1,
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
      <Oppgave1 />
  );
}

function App() {
  return (
    <>
      <Eksempler />
      <Oppgaver />
      <Fasit />
    </>
  );
}

export default App;
