import React, { createContext, useContext, useState } from "react";

// 1. Lag CurrentUserContext med default verdi null

export const CurrentUserProvider = ({ children }) => {
  // 2. Lag en state for currentUser med en defaultverdi null

  // 3. Wrap "children" med CurrentUserContext provider med value: currentUser og setCurrentUser
  return children;
};

export const useCurrentUser = () => {
  // 4. Hent context fra CurrentUserContext
  // 5. Sjekk at context er definert, hvis ikke kast en error
  // 6. Returner "currentUser" og "setCurrentUser" fra context
  return null;
};

// Gå videre til komponenten "WelcomePanel" i ./components/WelcomePanel.js
