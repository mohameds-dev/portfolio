import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiFlutter,
  SiDocker,
  SiGit,
  SiMysql,
  SiJira,
  SiJest,
  SiPostman,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const iconMap = {
  FaReact,
  FaGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiFlutter,
  SiDocker,
  SiGit,
  SiMysql,
  SiJira,
  SiJest,
  SiPostman,
  SiNextdotjs,
  SiTailwindcss,
};

export function Skill({ skill }) {
  const { name, icon: Icon, color } = skill;

  if (!Icon) {
    console.warn(`Icon not found for skill ${name}`);
    return null;
  }

  return (
    <div className="group relative">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-100 transition-all duration-300 shadow-sm">
        <Icon
          className="w-7 h-7 drop-shadow-sm"
          style={{
            color,
            filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 2.0))",
          }}
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10">
        {name}
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45" />
      </div>
    </div>
  );
}
