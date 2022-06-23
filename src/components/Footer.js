import Github from "./Github.js";
import Linkedin from "./Linkedin.js";
import Mail from "./Mail.js";

export default function Footer() {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="h-28 bg-offWhite shadow-3xl">
      <div className="flex items-center h-[inherit] justify-center mt-6 gap-6">
        <Github />
        <Mail />
        <Linkedin />
      </div>
    </footer>
  );
}
