import LinkIcon from "../../public/icons/LinkIcon.js";

export default function Live({ live }) {
  return (
    <a
      href={live}
      target="_blank"
      rel="noreferrer"
      className="text-center w-28 py-2 rounded-full border-2 border-green text-[17px] text-green font-medium hover:bg-green hover:text-white transition-all duration-200 dark:border-mustard dark:text-mustard dark:hover:bg-mustard dark:hover:text-white"
    >
      Live
      <span className="ml-2">
        <LinkIcon />
      </span>
    </a>
  );
}
