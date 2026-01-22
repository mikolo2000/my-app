import { useEffect, useState } from "react";
import React from "react";

const ThemeButton = React.memo(() => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const saved = localStorage.getItem("theme");
    if (!saved) setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e) => {
      const saved = localStorage.getItem("theme");
      if (saved) return;

      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <h1>System Theme: {theme}</h1>
      <p>Change your OS theme to see this update.</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
});

export default ThemeButton;
