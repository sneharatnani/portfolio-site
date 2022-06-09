import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="shadow-3xl font-[Poppins]">
      <nav className="w-11/12 m-auto flex justify-between h-[10vh] items-center text-lightGrey">
        <Link to="/" className="text-4xl font-raleway">
          S<span className="text-green">R.</span>
        </Link>
        <div className="flex gap-6 capitalize text-lg">
          <Link
            to="/"
            className="border-b-2 border-b-transparent hover:border-b-green transition duration-300 ease-out"
          >
            home
          </Link>
          <Link to="/">about</Link>
          <Link to="/">projects</Link>
        </div>
      </nav>
    </header>
  );
}
