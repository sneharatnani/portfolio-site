import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler.js";
import StyledNavLink from "./StyledNavLink.js";
import Resume from "../../assets/Sneha_Ratnani_Resume.pdf";

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
          <a href={Resume} target={"_blank"}>
            resume
          </a>
        </StyledNavLink>
      </ul>
      <ThemeToggler />
    </div>
  );
}
