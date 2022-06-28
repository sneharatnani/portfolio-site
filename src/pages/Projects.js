import ProjectCard from "../components/project/ProjectCard.js";
import { projectData } from "../projectData.js";
import Footer from "../components/footer/Footer.js";

export default function Projects() {
  const allProjects = projectData.map((project) => (
    <ProjectCard {...project} key={project.id} />
  ));

  return (
    <>
      <section className="w-11/12 sm:w-3/4 mx-auto text-lightGrey mt-4 dark:text-white">
        <h1 className="capitalize text-4xl font-raleway mb-8 text-center">
          my <span className="text-green dark:text-mustard">projects</span>
        </h1>
        <div>{allProjects}</div>
      </section>
      <Footer />
    </>
  );
}
