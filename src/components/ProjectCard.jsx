import { Skill } from "./Skill";

export function ProjectCard(props) {
  const { title, description, image, link, skills } = props;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 h-12">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-4 h-16">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
