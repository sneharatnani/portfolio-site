import Link from "next/link.js";

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center gap-4">
      <h1 className="font-semibold text-9xl">
        4<span className="text-green dark:text-mustard">0</span>4
      </h1>

      <h1 className="font-medium text-xl">Sorry, the page does not exist.</h1>
      <Link href="/">
        <a
          className="text-[17px] text-white w-52 rounded-full font-medium block mx-auto py-3 border-2 transition-all duration-200 bg-green border-green
          hover:text-green hover:bg-transparent dark:border-mustard dark:text-white dark:bg-mustard dark:hover:bg-transparent dark:hover:text-mustard
          text-center"
        >
          Go back home
        </a>
      </Link>
    </div>
  );
}
