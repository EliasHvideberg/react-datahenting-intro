import { useState, createContext, useContext } from "react";

const LoginContext = createContext(null);

const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("Du er utenfor Login-kontekst!");
  }

  return context;
};

const LoginProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        status: status,
        setStatus: () => setStatus(!status),
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const Eksempel3 = () => {
  return (
    <LoginProvider>
      <LoginButton />
    </LoginProvider>
  );
};

export const LoginButton = () => {
  const { status, setStatus } = useLoginContext();
  return (
    <div>
      <p>Du er nå logget {status ? "inn" : "ut"} </p>
      <button onClick={setStatus}>Logg inn/ut</button>
    </div>
  );
};
