import Link from "next/link.js";
import Layout from "../components/Layout.js";

export default function FourZeroFour() {
  return (
    <Layout metaTitle="Page Not Found - Sneha Ratnani">
      <>
        <div className="h-[90vh] text-center px-4 md:px-0 flex flex-col md:flex-row md:text-start items-center justify-center md:space-x-6">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-7xl font-semibold leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl md:leading-14">
              404
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Sorry, couldn&#39;t find this page.
            </p>
            <p className="mb-8">
              But don&#39;t worry, you can find plenty of other things on my
              homepage.
            </p>
            <Link href="/">
              <a className="rounded-lg bg-green px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-lime-600 focus:outline-none dark:bg-mustard dark:hover:bg-amber-500">
                Back to homepage
              </a>
            </Link>
          </div>
        </div>
      </>
    </Layout>
  );
}
