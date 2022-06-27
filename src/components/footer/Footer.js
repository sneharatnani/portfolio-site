import Github from "./Github.js";
import Linkedin from "./Linkedin.js";
import Mail from "./Mail.js";
import heart from "../../assets/icons/heart.svg";

export default function Footer() {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="flex items-center gap-4 justify-center flex-col h-32 bg-offWhite dark:bg-gray-800 shadow-3xl dark:shadow-gray-900 px-4">
      <div className="flex gap-6">
        <Github />
        <Mail />
        <Linkedin />
      </div>
      <p className="text-lightGrey dark:text-gray-300/80 text-center text-sm">
        <span className="text-base">©</span> {currentYear()} | Designed & coded
        with <img src={heart} alt="red heart" className="inline" /> by Sneha
        Ratnani
      </p>
    </footer>
  );
}
