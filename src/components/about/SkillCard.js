export default function SkillCard({ image, caption }) {
  return (
    <figure className="flex flex-col justify-center items-center text-sm gap-1">
      <img src={image} alt={`${caption} icon`} className="h-16 w-16" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
