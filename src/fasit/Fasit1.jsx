import React, { useState, createContext, useContext } from "react";

const LangContext = createContext(null);

export const Fasit1 = () => {
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
    <LangContext.Provider
      value={{
        lang: lang,
        handleLangChange: handleLangChange,
      }}
    >
      <Header lang={lang} handleLangChange={handleLangChange} />
    </LangContext.Provider>
  );
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
  const { lang } = useContext(LangContext);

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
  const { lang, handleLangChange } = useContext(LangContext);

  return (
    <button className="lang-button" onClick={handleLangChange}>
      {lang === "norwegian" ? "English" : "Norsk"}
    </button>
  );
};
