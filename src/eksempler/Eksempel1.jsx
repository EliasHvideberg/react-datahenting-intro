import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export function Eksempel1() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`full-size theme-bg--${theme}`}>
        <Text />
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

function Text() {
  const theme = useContext(ThemeContext);

  return <p className={`theme-text--${theme}`}>Noe tekst</p>;
}
