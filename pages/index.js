import Image from "next/image.js";
import Link from "next/link.js";
import sneha from "../public/img/sneha.jpg";

export default function Home() {
  return (
    <>
      <div className="px-4 text-center h-[90vh] flex capitalize flex-col items-center justify-center font-medium">
        <div className="h-[150px] w-[150px] mb-6 border-4 border-gray-200 dark:border-gray-700 rounded-full">
          <Image
            src={sneha}
            alt="Sneha Ratnani"
            width={150}
            height={150}
            placeholder="blur"
            priority
            className="rounded-full"
          />
        </div>

        <p className="text-[21px] font-medium text-green dark:text-mustard">
          hello, I&#39;m
        </p>
        <p className="font-semibold text-7xl mb-3">Sneha ratnani</p>
        <p className="font-medium text-[19px]">
          a front-end developer from india.
        </p>
        <div className="sm:flex gap-6 mt-6">
          <Link href="/about">
            <a
              className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:text-white dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
            >
              More About Me
            </a>
          </Link>

          {/* <Link href="/projects">
            <a
              className="text-[17px] mt-4 sm:mt-0 w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 text-white bg-gray-700 border-gray-700
          hover:text-gray-700 hover:bg-transparent dark:text-gray-900 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-transparent dark:hover:text-white text-center"
            >
              view my projects
            </a>
          </Link> */}
        </div>
      </div>
    </>
  );
}
