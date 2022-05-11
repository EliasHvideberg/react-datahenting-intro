import React from "react";
import { useDarkMode } from "../contexts/DarkMode";

export const DarkmodeToggle = () => {
  const { darkMode, toggle } = useDarkMode();
  return (
    <div className="dark-mode-toggle">
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => {
            toggle();
          }}
        />
        Use dark mode
      </label>
    </div>
  );
};
