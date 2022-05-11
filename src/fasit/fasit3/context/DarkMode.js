import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggle: () => setDarkMode(!darkMode) }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return { darkMode: context.darkMode, toggle: context.toggle };
};
