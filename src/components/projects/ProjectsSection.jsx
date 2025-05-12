import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";

export default function ProjectsSection() {
  const { projects } = projectsData;
  const { skills } = skillsData;

  // Combine project data with skill data
  const projectsWithSkills = projects.map((project) => ({
    ...project,
    skills: project.skills.map((skillKey) => skills[skillKey]),
  }));

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            {projectsWithSkills.map((project) => (
              <div key={project.title} className="w-[350px]">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
