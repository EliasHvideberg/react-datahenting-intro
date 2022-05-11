import React, { createContext, useContext, useState } from "react";

const LangContext = createContext("norwegian")

export const Oppgave1 = () => {
  // Kjør opp oppgaven i App.js! Du skal se en header med en meny på venstre side og to knapper på høyre side.
  // Trykker du på English/Norsk skal menyen på venstre side bytte språk.

  // Oppgaven går ut på at du skal bruke context istedenfor å sende state med props.

  // 1. Opprett en context, kall den f.eks. LangContext.
  // 2. Opprett en Provider og wrap denne rundt Header-komponenten.
  // 3. Sett lang og handleLangChange som verdier i Provideren.
  // 4. Konsumer contexten i LangMenu-komponenten.
  // Obs! Du må også gjøre endringer med Header, PrimaryNav, ScondaryNav, LangNav!

  const [lang, setLang] = useState("norwegian");

  const handleLangChange = () => {
    if (lang === "norwegian") {
      setLang("english");
    }

    if (lang === "english") {
      setLang("norwegian");
    }
  };

  return (
    <LangContext.Provider value={{lang, handleLangChange}}>
      <Header />
    </LangContext.Provider>

  )
};

const Header = () => {
  return (
    <header className="header">
      <PrimaryNav />
      <SecondaryNav />
    </header>
  );
};

const PrimaryNav = () => {
  const {lang} = useContext(LangContext)
  return (
    <nav>
      <ul>
        <li>{lang === "norwegian" ? "Hjem" : "Home"}</li>
        <li>{lang === "norwegian" ? "Om oss" : "About us"}</li>
        <li>{lang === "norwegian" ? "Hva vi tilbyr" : "What we offer"}</li>
        <li>{lang === "norwegian" ? "Kontakt oss" : "Contact us"}</li>
      </ul>
    </nav>
  );
};

const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <LangNav />
      <CTANav />
    </div>
  );
};

const CTANav = () => {
  return (
    <div className="cta-nav">
      <button className="cta-button">CTA</button>
    </div>
  );
};

const LangNav = () => {
  return (
    <div className="lang-nav">
      <LangMenu />
    </div>
  );
};

const LangMenu = () => {
  const {lang, handleLangChange} = useContext(LangContext)
  return (
    <button className="lang-button" onClick={handleLangChange}>
      {lang === "norwegian" ? "English" : "Norsk"}
    </button>
  );
};
