import { useEffect } from "react";
import { Link } from "react-router-dom";
import sneha from "../assets/img/sneha.jpg";
import Footer from "../components/footer/Footer.js";

export default function Home() {
  useEffect(() => {
    document.title = "Sneha Ratnani: Frontend Developer";
  }, []);
  return (
    <>
      <div className="px-4 text-center h-[90vh] flex capitalize flex-col items-center justify-center font-medium">
        <img
          src={sneha}
          alt="Sneha Ratnani"
          className="rounded-full mb-6 h-40 w-40 border-4 border-gray-200 dark:border-gray-700 2xl:w-44 2xl:h-44"
        />
        <p className="text-xl">hey!</p>
        <p className="font-raleway text-3xl sm:text-4xl mb-2 2xl:text-5xl">
          i'm{" "}
          <span className="text-green dark:text-mustard">Sneha ratnani.</span>
        </p>
        <p className="text-3xl font-raleway sm:text-4xl 2xl:text-5xl">
          a front-end developer from india.
        </p>
        <div className="sm:flex gap-6 mt-6">
          <Link
            to="/about"
            className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:text-white dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
          >
            More About Me
          </Link>
          <Link
            to="/projects"
            className="text-[17px] mt-4 sm:mt-0 w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 text-white bg-gray-700 border-gray-700
          hover:text-gray-700 hover:bg-transparent dark:text-gray-900 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-transparent dark:hover:text-white text-center"
          >
            view my projects
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
