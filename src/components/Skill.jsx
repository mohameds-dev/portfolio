import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiJava,
  SiPython,
  SiFlutter,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";

// Create a mapping of icon names to their components
const iconMap = {
  FaReact,
  FaNodeJs,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiJava,
  SiPython,
  SiFlutter,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiGit,
  SiVisualstudiocode,
};

export function Skill({ skill }) {
  const { name, icon, color } = skill;
  const Icon = iconMap[icon];

  if (!Icon) {
    console.warn(`Icon ${icon} not found for skill ${name}`);
    return null;
  }

  return (
    <div className="group relative">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 transition-all duration-300">
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10">
        {name}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45" />
      </div>
    </div>
  );
}
