import Code from "./Code.js";
import Live from "./Live.js";

export default function ProjectCard({ img, alt, description, techStack }) {
  return (
    <div className="flex flex-row-reverse">
      <img src={img} alt={alt} className="h-56" />
      <div>
        <p>Tech Stack: {techStack}</p>
        <p>{description}</p>
        <div className="flex">
          <Code />
          <Live />
        </div>
      </div>
    </div>
  );
}
