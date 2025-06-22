// src/components/ThemeToggle.tsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./toggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-toggle">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <span className="slider">
        <span className="icon">{theme === "dark" ? "🌞" : "🌙"}</span>
      </span>
    </label>
  );
};

export default ThemeToggle;
