import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="text-4xl font-raleway focus:outline-none">
      S<span className="text-green dark:text-mustard">R.</span>
    </Link>
  );
}
