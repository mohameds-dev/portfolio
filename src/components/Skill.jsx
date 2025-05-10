import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const iconMap = {
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiNextdotjs: SiNextdotjs,
  SiTailwindcss: SiTailwindcss,
};

export function Skill({ skill }) {
  const { name, icon, color } = skill;
  const Icon = iconMap[icon];

  return (
    <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
      <Icon className="w-5 h-5" style={{ color }} />
      <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
}
