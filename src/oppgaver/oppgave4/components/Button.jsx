import React from "react";
import { useDarkMode } from "../contexts/DarkMode";

export const Button = ({ disabled, onClick, children }) => {
  // 12. Erstatt linjen under med darkMode fra useDarkMode hooken
  // Og til slutt steg 13. i Oppgave4.js
  const darkMode = null;
  const theme = darkMode ? "dark" : "light";
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
