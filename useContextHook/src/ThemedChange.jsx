import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ThemedChange = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Correct hook usage

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>{" "}
      {/* Use correct function */}
    </div>
  );
};

export default ThemedChange;
