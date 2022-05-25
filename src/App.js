import "./App.css";
import {
  BasicOppgave1,
  Oppgave1,
  ReactQueryOppgave1,
  ReactQueryOppgave2,
  ReactQueryOppgave3,
  SWRoppgave1,
  SWRoppgave2,
} from "./oppgaver";
import {
  SWRFasit1,
  SWRFasit2,
} from "./fasit";
import { Eksempel1 } from "./eksempler";

function Fasit() {
  return (
      <>
        {/* <SWRFasit1 /> */}
        {/* <SWRFasit1 /> */}
      </>
  );
}

function Eksempler() {
  return (
      <Eksempel1 />
  );
}

function Oppgaver() {
  return (
      
      <>
        {/* <ReactQueryOppgave2 /> */}
        {/* <SWRoppgave1 /> */}
        {/* <SWRoppgave2 /> */}
      </>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Eksempler /> */}
      <Oppgaver />
      {/* <Fasit /> */}
    </div>
  );
}

export default App;
