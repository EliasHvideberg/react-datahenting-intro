import { useState } from "react";

export function Eksempel2a() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`full-size theme-bg--${theme}`}>
      <Section theme={theme} />
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        <span className={`theme-text--${theme}`}>Use dark mode</span>
      </label>
    </div>
  );
}

function Section({ theme }) {
  return (
    <section>
      <Card theme={theme} />
    </section>
  );
}

function Card({ theme }) {
  return (
    <div>
      <Text theme={theme} />
    </div>
  );
}

function Text({ theme }) {
  return <p className={`theme-text--${theme}`}>Noe tekst</p>;
}
