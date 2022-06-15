import { Link } from "react-router-dom";
import NavLinks from "./NavLinks.js";
import Menu from "./HamburgerMenu.js";

export default function Navbar() {
  return (
    <header className="shadow-3xl font-[Poppins]  dark:bg-gray-800">
      <nav className="w-4/5 m-auto flex justify-between h-[10vh] items-center dark:text-white">
        <Link to="/" className="text-4xl font-raleway">
          S<span className="text-green dark:text-mustard">R.</span>
        </Link>
        <Menu />
        <NavLinks />
      </nav>
    </header>
  );
}
