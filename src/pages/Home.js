import { Link } from "react-router-dom";
import sneha from "../assets/img/sneha.jpg";

export default function Home() {
  return (
    <div className="capitalize tracking-wide flex flex-col-reverse items-center justify-center h-[80vh] text-lightGrey text-center font-poppins dark:bg-gray-900 dark:text-white lg:flex-row lg:text-left">
      <section className="lg:mr-24">
        <p className="text-xl">Hey There !</p>
        <p className="font-raleway px-1 leading-10 mt-2 font-bold text-4xl sm:px-0 lg:text-5xl lg:leading-[3.5rem]">
          <span className="text-green dark:text-mustard">
            i'm sneha ratnani.
          </span>
          <br />
          front-end developer
        </p>
        <Link
          to="/about"
          className="bg-green text-white text-[17px] w-48 rounded-full font-medium block mt-6 mx-auto py-3
          shadow-[inset_0_0_0_0_transparent] border-2 transition-all duration-300 border-green 
          hover:text-lightGrey hover:shadow-[inset_12rem_0_0_0_white] dark:border-mustard dark:bg-mustard dark:hover:shadow-[inset_12rem_0_0_0_#111827] dark:hover:text-white
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
