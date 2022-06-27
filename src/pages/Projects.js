import portfolio from "../assets/img/portfolio.png";
import ProjectCard from "../components/project/ProjectCard.js";

export default function Projects() {
  return (
    <section className="w-11/12 sm:w-3/4 mx-auto text-lightGrey mt-4 text-center">
      <h1 className="capitalize text-4xl font-raleway mb-4">
        my <span className="text-green">projects</span>
      </h1>
      <ProjectCard
        img={portfolio}
        description="kj skajs kjsa kajsk kkdksj ksjdks kjsds kjskdjks kksjdksd kaksja"
        techStack="react,javascript,html,css"
      />
    </section>
  );
}
