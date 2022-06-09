import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 h-[10vh] items-center text-lightGrey">
      <Link to="/" className="text-4xl font-raleway">
        S<span className="text-green">R.</span>
      </Link>
      <div className="flex gap-6 capitalize">
        <Link to="/" className="text-green font-medium">
          home
        </Link>
        <Link to="/">about</Link>
        <Link to="/">projects</Link>
      </div>
    </nav>
  );
}
