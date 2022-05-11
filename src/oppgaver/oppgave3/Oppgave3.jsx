import { DarkModeProvider, useDarkMode } from "./context/DarkMode";

export function Oppgave3() {
  // I denne oppgaven skal du lage en context for bruk av darkmode
  // og en egen customhook for å bruke denne contexten.
  // Begynn med stegene 1-6 som er beskrevet i "context/DarkMode.js"

  // Så fortsett med disse stegene:
  // 7. Wrap "Panel" i DarkModeProvider
  return <Panel />;
}

function Panel() {
  // 8. Hent "darkMode" og "toggle" fra useDarkMode()-customHook
  // Oppgaven er ferdig! Du kan nå teste løsningen og sammenligne med fasit.
  const darkMode = null;
  const toggle = null;
  const theme = darkMode ? "dark" : "light";
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>Custom hook for darkMode</h1>
      <button onClick={toggle}>Toggle darkmode</button>
    </section>
  );
}
