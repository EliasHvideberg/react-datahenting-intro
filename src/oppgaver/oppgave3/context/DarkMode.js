import React, { createContext, useContext, useState } from "react";

// 1. Opprett en "DarkModeContext" med default verdi null.

export const DarkModeProvider = ({ children }) => {
  // 2. Opprett en state for darkMode med en boolsk defaultverdi
  // 3. Wrap "children" med en provider som har "darkMode" og "toggle" som value.
  // toggle toggler den boolske verdien i state.
  return children;
};

export const useDarkMode = () => {
  // 4. Hent context fra "DarkModeContext"
  // 5. Sjekk at context er definert, hvis ikke kast en error
  // 6. Returner "darkMode" og "toggle" fra context
};
