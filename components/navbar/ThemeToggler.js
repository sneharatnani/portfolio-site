import { useTheme } from "next-themes";
import Image from "next/image.js";
import { useEffect, useState } from "react";

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
          className="w-full h-14 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-600 md:h-9 md:w-9 hover:border-2 border-gray-400"
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Image
            src={
              resolvedTheme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"
            }
            alt={`${resolvedTheme ? "sun" : "moon"}`}
            width={20}
            height={20}
          />
          <span className="md:hidden pl-4 font-medium text-base">
            {resolvedTheme ? "Change to light theme" : "Change to dark theme"}
          </span>
        </button>
      )}
    </>
  );
}
