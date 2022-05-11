import React, { createContext, useContext, useState } from "react";

const ConfettiContext = createContext(null);

export const ConfettiProvider = ({ children }) => {
  const [confettiMode, setConfettiMode] = useState(false);

  return (
    <ConfettiContext.Provider
      value={{ confettiMode, toggle: () => setConfettiMode(!confettiMode) }}
    >
      {children}
    </ConfettiContext.Provider>
  );
};

export const useConfettiMode = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error("useConfettiMode must be used within a ConfettiProvider");
  }
  return { confettiMode: context.confettiMode, toggle: context.toggle };
};
