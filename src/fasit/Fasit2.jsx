import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const Fasit2 = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`full-size theme-bg--${theme}`}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Text />
      </div>
    </ThemeContext.Provider>
  );
};

const Text = () => {
  const theme = useContext(ThemeContext);
  return (
    <p className={`text theme-text--${theme}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  );
};
