import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import { ThemeContext } from "../themeContext.js";
import { useContext } from "react";

export default function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="w-full h-14 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-600 md:h-9 md:w-9 hover:border-2 border-gray-400"
      onClick={() => setTheme((prevTheme) => (prevTheme ? "" : "dark"))}
    >
      <img src={theme ? sun : moon} />
      <span className="md:hidden pl-4 font-medium">
        {theme ? "Change to light theme" : "Change to dark theme"}
      </span>
    </button>
  );
}
