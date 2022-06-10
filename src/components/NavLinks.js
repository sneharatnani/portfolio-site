import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler.js";

function StyledNavLink({ text, address }) {
  return (
    <li className="relative transform translate-y-0 transition-transform duration-500 ease-in-out after:contents-[''] after:w-full after:h-[2px] after:bg-green dark:after:bg-mustard after:origin-center after:scale-x-0 after:absolute after:bottom-0 after:left-0 after:transform after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:text-green dark:hover:text-mustard">
      <Link to={address}>{text}</Link>
    </li>
  );
}

export default function NavLinks() {
  return (
    <div className="flex gap-6 items-center">
      <ul className="flex gap-6 capitalize text-lg">
        <StyledNavLink text="home" address="/" />
        <StyledNavLink text="about" address="/about" />
        <StyledNavLink text="projects" address="/projects" />
        <StyledNavLink text="resume" address="/resume" />
      </ul>
      <ThemeToggler />
    </div>
  );
}
