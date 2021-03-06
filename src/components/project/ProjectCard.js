import Code from "./Code.js";
import Live from "./Live.js";

export default function ProjectCard({
  name,
  img,
  alt,
  description,
  techStack,
  live,
  code,
}) {
  return (
    <div className="mb-24 flex-row-reverse justify-center gap-8 lg:flex">
      <img src={img} alt={alt} className="lg:h-[17rem]" />
      <div className="self-center mt-4 lg:mt-0">
        <h1 className="font-raleway text-3xl text-gray-700 mb-4 dark:text-white">
          {name}
        </h1>
        <p className=" font-medium text-lg mb-2">
          <span className="text-green dark:text-mustard">Tech Stack:</span>{" "}
          {techStack}
        </p>
        <p className="mb-4">{description}</p>
        <div className="flex gap-4">
          <Live live={live} />
          <Code code={code} />
        </div>
      </div>
    </div>
  );
}
