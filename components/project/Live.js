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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline h-4 w-4 fill-current"
          viewBox="0 0 448 512"
        >
          <path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
        </svg>
      </span>
    </a>
  );
}
