import Image from "next/image.js";
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
      <div className="h-auto w-auto lg:h-[17rem] lg:w-[29rem]">
        <Image
          src={img}
          alt={alt}
          width={910}
          height={524}
          layout="intrinsic"
          priority
        />
      </div>
      <div className="self-center mt-4 lg:mt-0 lg:w-[30rem]">
        <h1 className="font-semibold text-3xl text-gray-700 mb-4 dark:text-white">
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
