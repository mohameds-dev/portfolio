import SkillItem from "./SkillItem";

export default function SkillCategory({ name, items }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{name}</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(items).map(([key, skill]) => (
          <SkillItem key={key} skill={skill} />
        ))}
      </div>
    </div>
  );
}
