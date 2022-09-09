import Image from "next/image.js";
import Link from "next/link.js";
import sneha from "../public/img/sneha.jpg";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <Layout metaTitle="Sneha Ratnani: Frontend Developer">
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

          <p className="text-[22px] font-medium text-green dark:text-mustard">
            hey, I&#39;m
          </p>
          <p className="font-semibold text-7xl mb-3">Sneha ratnani</p>
          <p className="font-medium text-[19px]">
            a front-end developer from india.
          </p>
          <div className="sm:flex gap-6 mt-6">
            <Link href="/about">
              <a
                className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
              >
                More About Me
              </a>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
}
