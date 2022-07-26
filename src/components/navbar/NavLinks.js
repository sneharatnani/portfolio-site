import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler.js";
import StyledNavLink from "./StyledNavLink.js";

export default function NavLinks() {
  return (
    <div className="gap-6 items-center hidden md:flex">
      <ul className={`gap-6 capitalize text-lg flex`}>
        <StyledNavLink>
          <Link to="/">home</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link to="/about">about</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link to="/projects">projects</Link>
        </StyledNavLink>
        <StyledNavLink>
          <a
            href="https://drive.google.com/file/d/12LoQ_5ZGsfa7lviv2yFqsvvvdJOwWyKa/view?usp=sharing"
            target={"_blank"}
          >
            resume
          </a>
        </StyledNavLink>
      </ul>
      <ThemeToggler />
    </div>
  );
}
