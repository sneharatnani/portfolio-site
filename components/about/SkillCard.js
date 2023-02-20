import Image from "next/image.js";

export default function SkillCard({ image, caption }) {
  return (
    <div className="flex flex-col justify-center items-center text-sm gap-1">
      <Image
        src={image}
        alt={`${caption} icon`}
        height={64}
        width={64}
        priority
        objectFit="contain"
      />

      <p>{caption}</p>
    </div>
  );
}
