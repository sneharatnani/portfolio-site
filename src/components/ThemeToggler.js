import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";
import { ThemeContext } from "../themeContext.js";
import { useContext } from "react";

export default function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <img
      src={theme ? sun : moon}
      onClick={() => setTheme((prevTheme) => (prevTheme ? "" : "dark"))}
      className="cursor-pointer"
    />
  );
}
