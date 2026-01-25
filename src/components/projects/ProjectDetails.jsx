import { Skill } from "@/components/projects/ProjectSkill";
import { loadProjectsWithSkills } from "@/utils/utils";
import ReactMarkdown from "react-markdown";

export function ProjectDetails({
  project,
  markdownContent = "",
  frontmatter = {},
}) {
  // Load project with processed skills
  const projectsWithSkills = loadProjectsWithSkills();
  const projectWithSkills = projectsWithSkills.find(
    (p) => p.title === project.title
  ) || { ...project, skills: [] };

  const { title, description, image, link, skills, live_demo_link } =
    projectWithSkills;

  // Use frontmatter to override/supplement project data
  const displayTitle = frontmatter.title || title;
  const displayDescription = frontmatter.tagline || description;
  const heroImage = frontmatter.heroImage || image;
  const status = frontmatter.status;
  const date = frontmatter.date;
  const frontmatterLinks = frontmatter.links || {};
  const repoLink = frontmatterLinks.repo || link;
  const demoLink = frontmatterLinks.demo || live_demo_link;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Status */}
        <div className="mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {displayTitle}
            </h1>
            {status && (
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  status === "Completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                }`}
              >
                {status}
              </span>
            )}
          </div>
          {date && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed">
          {displayDescription}
        </p>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills &&
              skills.length > 0 &&
              skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            {(!skills || skills.length === 0) && (
              <p className="text-gray-500 dark:text-gray-400 italic">
                No technologies listed
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-300 text-center font-medium"
          >
            View Source
          </a>
          {demoLink && demoLink.trim() !== "" && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-center font-medium"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Markdown Content */}
        {markdownContent && (
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-700 dark:text-gray-300" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="italic" {...props} />
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

