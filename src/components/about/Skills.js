import html from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import headlessUi from "../../assets/icons/headlessUi.svg";
import javascript from "../../assets/icons/javascript.svg";
import linuxCli from "../../assets/icons/linux.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import npm from "../../assets/icons/npm.svg";
import reactRouter from "../../assets/icons/react-router.svg";
import react from "../../assets/icons/react.svg";
import redux from "../../assets/icons/redux.svg";
import tailwindcss from "../../assets/icons/tailwindcss.svg";
import vim from "../../assets/icons/vim.svg";
import vsCode from "../../assets/icons/vsCode.svg";
import webpack from "../../assets/icons/webpack.svg";
import github from "../../assets/icons/github.svg";

export default function Skills() {
  return (
    <div>
      <hr className="border-green dark:border-mustard" />
      <p className="font-raleway text-3xl uppercase mt-8">
        skills <span className="text-green dark:text-mustard">& tools</span>
      </p>
      <div className="mt-8 grid grid-cols-2col gap-x-16 gap-y-6 justify-center font-medium sm:grid-cols-3col md:grid-cols-4col lg:grid-cols-5col">
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={html} alt="html icon" className="h-16 w-16" />
          <figcaption>HTML</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={css} alt="css icon" className="h-16 w-16" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={javascript} alt="javscript icon" className="h-16 w-16" />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={react} alt="react logo" className="h-16 w-16" />
          <figcaption>ReactJS</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={webpack} alt="webpack logo" className="h-16 w-16" />
          <figcaption>Webpack</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={redux} alt="redux logo" className="h-16 w-16" />
          <figcaption>Redux</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={tailwindcss} alt="tailwindcss logo" className="h-16 w-16" />
          <figcaption>TailwindCss</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={reactRouter} alt="reactRouter logo" className="h-16 w-16" />
          <figcaption>React Router</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={nodejs} alt="nodejs icon" className="h-16 w-16" />
          <figcaption>nodeJS</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={headlessUi} alt="headlessUi logo" className="h-16 w-16" />
          <figcaption>headlessUI</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={git} alt="git icon" className="h-16 w-16" />
          <figcaption>Git</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={linuxCli} alt="linux logo" className="h-16 w-16" />
          <figcaption>Linux CLI</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={npm} alt="npm logo" className="h-16 w-16" />
          <figcaption>npm</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={vsCode} alt="vsCode logo" className="h-16 w-16" />
          <figcaption>VS Code</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={github} alt="github logo" className="h-16 w-16" />
          <figcaption>Github</figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center text-sm gap-1">
          <img src={vim} alt="vim logo" className="h-16 w-16" />
          <figcaption>Vim</figcaption>
        </figure>
      </div>
    </div>
  );
}
