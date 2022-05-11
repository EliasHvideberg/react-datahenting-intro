import React from "react";
import { useDarkMode } from "../contexts/DarkMode";

export const Button = ({ disabled, onClick, children }) => {
  const { darkMode } = useDarkMode();
  const theme = darkMode ? "dark" : "light";
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
