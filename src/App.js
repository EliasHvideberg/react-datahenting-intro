import "./App.css";
import {
  Oppgave1,
  Oppgave2,
  Oppgave3,
  Oppgave4,
  Oppgave5,
  Bonus,
} from "./oppgaver";
import {
  Fasit1,
  Fasit2,
  Fasit3,
  Fasit4,
  Fasit5,
  Bonus as BonusFasit,
} from "./fasit";
import { Eksempel1, Eksempel2a, Eksempel2b, Eksempel3 } from "./eksempler";
import { CenteredContent } from "./CenteredContent";

function Fasit() {
  return (
    <>
      <CenteredContent>
        {/* <Fasit1 /> */}
        {/* <Fasit2 /> */}
      </CenteredContent>
      {/* <Fasit3 /> */}
      {/* <Fasit4 /> */}
      {/* <Fasit5 /> */}
      {/* <BonusFasit /> */}
    </>
  );
}

function Eksempler() {
  return (
    <CenteredContent>
      {/* <Eksempel1 /> */}
      {/* <Eksempel2a /> */}
      {/* <Eksempel2b /> */}
      {/* <Eksempel3 /> */}
    </CenteredContent>
  );
}

function Oppgaver() {
  return (
    <>
      <CenteredContent>
        {/* <Oppgave1 /> */}
        <Oppgave2 />
      </CenteredContent>
      {/* <Oppgave3 /> */}
      {/* <Oppgave4 /> */}
      {/* <Oppgave5 /> */}
      {/* <Bonus /> */}
    </>
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
