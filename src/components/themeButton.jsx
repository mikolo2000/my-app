import { useEffect, useState } from "react";

function ThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };


  return (
    <div>
      <h1>System Theme: {theme}</h1>
      <p>Change your OS theme to see this update.</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default ThemeButton;
