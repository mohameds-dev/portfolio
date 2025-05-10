import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
    {
      title: "Project 5",
      description: "Description of Project 5",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            {projects.map((project) => (
              <div key={project.title} className="max-w-sm">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
