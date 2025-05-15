import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiHackerrank } from "react-icons/si";
import socialLinksData from "@/data/social_links.json";

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
