import StyledNavLink from "./StyledNavLink.js";
import Link from "next/link.js";
import ThemeToggler from "./ThemeToggler.js";

export default function NavLinks() {
  return (
    <div className="gap-6 items-center hidden md:flex">
      <ul className={`gap-6 capitalize text-lg flex`}>
        <StyledNavLink>
          <Link href="/">home</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link href="/about">about</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link href="/projects">projects</Link>
        </StyledNavLink>
        <StyledNavLink>
          <a
            href="https://drive.google.com/file/d/1c3BdRBKNPiS5W49qRPs9bxv4YutNPXK5/view?usp=sharing"
            rel="noreferrer"
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
