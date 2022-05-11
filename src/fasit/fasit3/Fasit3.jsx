import { DarkModeProvider, useDarkMode } from "./context/DarkMode";

export function Fasit3() {
  return (
    <DarkModeProvider>
      <Panel />
    </DarkModeProvider>
  );
}

function Panel() {
  const { darkMode, toggle } = useDarkMode();
  const theme = darkMode ? "dark" : "light";
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>Custom hook for darkMode</h1>
      <button onClick={toggle}>Toggle darkmode</button>
    </section>
  );
}
