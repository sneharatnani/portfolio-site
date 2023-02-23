import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "./MoonIcon.js";
import SunIcon from "./SunIcon.js";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button
          className="w-full h-14 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-600 md:h-10 md:w-10 hover:border-2 border-gray-400"
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span className="md:hidden pl-4 font-medium text-base">
            {resolvedTheme === "dark"
              ? "Change to light theme"
              : "Change to dark theme"}
          </span>
        </button>
      )}
    </>
  );
}
