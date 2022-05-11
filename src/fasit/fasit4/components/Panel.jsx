import { useDarkMode } from "../contexts/DarkMode";

export const Panel = ({ title, children }) => {
  const { darkMode } = useDarkMode();
  const theme = darkMode ? "dark" : "light";
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
