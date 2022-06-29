export default function Code({ code }) {
  return (
    <a
      href={code}
      target="_blank"
      className="text-center hover:bg-gray-700 hover:text-white transition-all duration-200 w-36 py-2 rounded-full font-medium border-2 border-gray-700 dark:border-white dark:hover:bg-white dark:hover:text-gray-900"
    >
      Source<span className="ml-2">{"</>"}</span>
    </a>
  );
}
