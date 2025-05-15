import { ProjectCard } from "@/components/projects/ProjectCard";
import { loadProjectsWithSkills } from "@/utils/utils";

export default function ProjectsSection() {
  const projectsWithSkills = loadProjectsWithSkills();

  return (
    <section id="projects" className="py-12 px-4 md:px-8">
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
