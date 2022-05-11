import { useDarkMode } from "../contexts/DarkMode";

export const Panel = ({ title, children }) => {
  // 8. Erstatt linjen under med darkMode fra useDarkMode hooken
  const darkMode = null;
  const theme = darkMode ? "dark" : "light";
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

// Gå videre til Greeting.jsx
