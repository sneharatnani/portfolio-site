export default function Live({ live }) {
  return (
    <a
      href={live}
      target="_blank"
      className="text-center w-28 py-2 rounded-full border-2 border-green text-[17px] text-green font-medium hover:bg-green hover:text-white transition-all duration-200 dark:border-mustard dark:text-mustard dark:hover:bg-mustard dark:hover:text-white"
    >
      Live
      <span className="ml-2">
        <svg
          className="inline h-5 w-5"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
        </svg>
      </span>
    </a>
  );
}
