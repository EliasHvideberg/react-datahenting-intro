import React, { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return {
    currentUser: context.currentUser,
    setCurrentUser: context.setCurrentUser,
  };
};
