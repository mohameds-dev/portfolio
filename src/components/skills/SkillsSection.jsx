import { loadSkillsWithIcons } from "@/utils/utils";
import SkillCategory from "./SkillCategory";

export default function SkillsSection() {
  const skills = loadSkillsWithIcons();

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, { name, items }]) => (
            <SkillCategory key={category} name={name} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
