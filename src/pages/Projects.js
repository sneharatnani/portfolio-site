import ProjectCard from "../components/project/ProjectCard.js";
import { projectData } from "../projectData.js";
import Footer from "../components/footer/Footer.js";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects Made By Sneha Ratnani";
  }, []);

  const allProjects = projectData.map((project) => (
    <ProjectCard {...project} key={project.id} />
  ));

  return (
    <>
      <section className="w-11/12 mx-auto mt-6 sm:w-3/4 lg:w-11/12 xl:w-3/4">
        <h1 className="capitalize text-4xl font-raleway mb-8 text-center">
          my <span className="text-green dark:text-mustard">projects</span>
        </h1>
        <div>{allProjects}</div>
      </section>
      <a
        href="https://github.com/sneharatnani"
        target="_blank"
        className="block text-center w-32 mx-auto mb-8 py-2 rounded-full border-2 border-gray-700 text-[17px] font-medium hover:bg-gray-700 hover:text-white transition-all duration-200 dark:border-mustard dark:text-mustard dark:hover:bg-mustard dark:hover:text-white"
      >
        Show All
      </a>
      <Footer />
    </>
  );
}
