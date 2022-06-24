import { Link } from "react-router-dom";
import sneha from "../assets/img/sneha.jpg";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
      <div className="px-4 text-center h-[90vh] flex capitalize flex-col items-center justify-center text-lightGrey font-medium dark:text-white">
        <img
          src={sneha}
          alt="Sneha Ratnani"
          className="rounded-full mb-6 h-40 w-40 border-4 border-gray-200 dark:border-gray-700"
        />
        <p className="text-xl">hey!</p>
        <p className="font-raleway text-3xl sm:text-4xl mb-2">
          i'm{" "}
          <span className="text-green dark:text-mustard">Sneha ratnani.</span>
        </p>
        <p className="text-3xl sm:text-4xl font-raleway">
          a front-end developer from india
        </p>
        <div className="sm:flex gap-6 mt-6">
          <Link
            to="/about"
            className="bg-green text-white w-52 rounded-full font-medium block mx-auto py-3
          shadow-[inset_0_0_0_0_transparent] border-2 transition-all duration-300 border-green
          hover:text-lightGrey hover:shadow-[inset_13rem_0_0_0_white] dark:border-mustard dark:bg-mustard dark:hover:shadow-[inset_13rem_0_0_0_#111827] dark:hover:text-white
          text-center"
          >
            More About Me
          </Link>
          <Link
            to="/projects"
            className="mt-4 sm:mt-0 w-52 rounded-full font-medium block mx-auto py-3
          shadow-[inset_0_0_0_0_transparent] border-2 transition-all duration-300 border-green
          hover:text-white hover:shadow-[inset_13rem_0_0_0_#72b626] dark:text-white dark:border-mustard dark:hover:shadow-[inset_13rem_0_0_0_#ffb703] dark:hover:text-white text-center"
          >
            view my projects
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
