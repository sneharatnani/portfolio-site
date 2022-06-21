import { Link } from "react-router-dom";
import sneha from "../assets/img/sneha.jpg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-center h-[80vh] text-lightGrey text-center font-poppins dark:bg-gray-900 dark:text-white transition-all duration-300 lg:flex-row lg:text-left">
      <section>
        <p className="text-lg">Hey There!</p>
        <div className="uppercase text-3xl font-bold sm:text-4xl mt-2">
          <p className="text-green dark:text-mustard mb-1">
            i'M sneha ratnani.
          </p>
          <p>frontend developer</p>
        </div>
        <Link
          to="/about"
          className="bg-green text-white w-40 font-medium block mt-3 mx-auto py-2 rounded 
          shadow-[inset_0_0_0_0_transparent] border-2 transition-all duration-300 border-green 
          hover:text-lightGrey hover:shadow-[inset_10rem_0_0_0_white] dark:border-mustard dark:bg-mustard dark:hover:shadow-[inset_10rem_0_0_0_#111827] dark:hover:text-white
          lg:ml-0 text-center"
        >
          More About Me
        </Link>
      </section>
      <img
        src={sneha}
        alt="Sneha Ratnani"
        className="rounded-full mb-5 h-40 w-40 border-4 border-gray-200 dark:border-gray-700"
      />
    </div>
  );
}
