import { skillsData } from "../../data/skillsData.js";
import SkillCard from "./SkillCard.js";

export default function Skills() {
  const allSkills = skillsData.map((skill) => (
    <SkillCard {...skill} key={skill.caption} />
  ));

  return (
    <div className="text-center">
      <hr className="border-green dark:border-mustard" />
      <h1 className="font-semibold text-3xl uppercase mt-8">
        skills <span className="text-green dark:text-mustard">& tools</span>
      </h1>
      <div className="mt-10 grid gap-x-9 gap-y-7 justify-center font-medium grid-cols-6col">
        {allSkills}
      </div>
    </div>
  );
}
