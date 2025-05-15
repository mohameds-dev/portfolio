import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiHackerrank } from "react-icons/si";
import socialLinksData from "@/data/social_links.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";

// Map of icon names to their components
const iconMap = {
  FaLinkedin,
  FaGithub,
  SiCodeforces,
  SiLeetcode,
  SiHackerrank,
};

/**
 * Loads and processes social links data from the JSON file
 * @returns {Array} Array of social links with their icons and URLs
 */
export const loadSocialLinks = () => {
  const { socialLinks } = socialLinksData;

  return socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon],
  }));
};

/**
 * Loads and processes projects data with their associated skills
 * @returns {Array} Array of projects with their skills data
 */
export const loadProjectsWithSkills = () => {
  const { projects } = projectsData;
  const { skills } = skillsData;

  return projects.map((project) => ({
    ...project,
    skills: project.skills.map((skillKey) => skills[skillKey]),
  }));
};
