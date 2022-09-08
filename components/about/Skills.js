import { skillsData } from "../../data/skillsData.js";
import SkillCard from "./SkillCard.js";

export default function Skills() {
  const allSkills = skillsData.map((skill) => (
    <SkillCard {...skill} key={skill.caption} />
  ));

  return (
    <div>
      <hr className="border-green dark:border-mustard" />
      <p className="font-semibold text-3xl uppercase mt-8">
        skills <span className="text-green dark:text-mustard">& tools</span>
      </p>
      <div className="mt-8 grid grid-cols-2col gap-x-16 gap-y-6 justify-center font-medium sm:grid-cols-3col md:grid-cols-4col lg:grid-cols-5col">
        {allSkills}
      </div>
    </div>
  );
}
