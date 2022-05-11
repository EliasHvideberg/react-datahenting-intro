import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Eksempel2b() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`full-size theme-bg--${theme}`}>
        <Section />
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          <span className={`theme-text--${theme}`}>Use dark mode</span>
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

function Section() {
  return (
    <section>
      <Card />
    </section>
  );
}

function Card() {
  return (
    <div>
      <Text />
    </div>
  );
}

function Text() {
  const theme = useContext(ThemeContext);

  return <p className={`theme-text--${theme}`}>Noe tekst</p>;
}
