export default function SkillItem({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group relative flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-300">
      <div
        className="w-8 h-8 flex items-center justify-center rounded-full"
        style={{ backgroundColor: `${skill.color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color: skill.color }} />
      </div>
      <span className="text-gray-700 font-medium">{skill.name}</span>
    </div>
  );
}
