import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null)

export function Oppgave2() {
  // I denne oppgaven skal du lage en tema-bytter som bytter mellom svart og hvitt tema ved å trykke på en button.
  // 1. Opprett en context. Kall den ThemeContext og sett default-verdi til null.
  // 2. Opprett en "theme" state og sett default til "light"
  // 3. Lag en metode toggleTheme som setter theme til "dark" hvis theme er "light" og "light" ellers.

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    else { setTheme("light")}
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`full-size theme-bg--${theme}`}>
        <button onClick={toggleTheme}>darkmode</button>
        < Text />
      </div>
    </ThemeContext.Provider>
  )
  // 4. Sett opp en context provider som tar imot "theme" som value.
  // Inni provideren skal det være en div: <div className={`full-size theme-bg--${theme}`}></div>
  // Inni denne div'en skal ha to ting:
  // - 1. lage en button som kjører toggleTheme-metoden ved onClick
  // - 2. <Text/>-komponenten
}

function Text() {
  // 5. Konsumer contexten her.
  // Returner det som står under:
  const {theme} = useContext(ThemeContext)
  return <p className={`text theme-text--${theme}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
}
