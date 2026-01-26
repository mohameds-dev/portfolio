import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import {
  SiCodeforces,
  SiLeetcode,
  SiHackerrank,
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
  SiPytest,
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
  SiSqlite,
  SiUnity,
  SiCloudflare,
} from "react-icons/si";
import socialLinksData from "@/data/social_links.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import personalUpdatesData from "@/data/personal_updates.json";

// Map of icon names to their components
const iconMap = {
  // Social Icons
  FaLinkedin,
  FaGithub,
  SiCodeforces,
  SiLeetcode,
  SiHackerrank,
  // Skill Icons
  FaReact,
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
  SiPytest,
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
  SiSqlite,
  SiUnity,
  SiCloudflare
};

const processSkillFields = (skillKey) => {
  for (const category of Object.values(skillsData.skills)) {
    if (category.items[skillKey]) {
      return {
        ...category.items[skillKey],
        icon: iconMap[category.items[skillKey].icon],
      };
    }
  }
  return null;
};

export const loadSocialLinks = () => {
  const { socialLinks } = socialLinksData;

  return socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon],
  }));
};

export const loadProjectsWithSkills = () => {
  const { projects } = projectsData;
  return projects.map((project) => ({
    ...project,
    skills: project.skills.map(processSkillFields).filter(Boolean),
  }));
};

export const loadSkillsWithIcons = () => {
  const { skills } = skillsData;
  const processedSkills = {};

  for (const [category, data] of Object.entries(skills)) {
    processedSkills[category] = {
      ...data,
      items: Object.fromEntries(
        Object.entries(data.items).map(([key]) => [
          key,
          processSkillFields(key),
        ])
      ),
    };
  }

  return processedSkills;
};

export const getProjectBySlug = (slug) => {
  const projectsWithSkills = loadProjectsWithSkills();
  return projectsWithSkills.find((project) => project.slug === slug);
};

export const loadPersonalUpdates = () => {
  // Sort by date in reverse chronological order (latest first)
  return [...personalUpdatesData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Reverse order
  });
};
