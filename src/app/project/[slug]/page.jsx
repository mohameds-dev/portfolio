import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { getProjectBySlug } from "@/utils/utils";
import { loadMarkdownFile } from "@/utils/markdown";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

export async function generateStaticParams() {
  const { projects } = projectsData;
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  // Load markdown frontmatter for SEO
  let frontmatter = {};
  if (project.markdown_path) {
    const markdown = loadMarkdownFile(project.markdown_path);
    frontmatter = markdown.frontmatter || {};
  }

  const title = frontmatter.title || project.title;
  const description = frontmatter.tagline || project.description;

  return {
    title: `${title} | Mohamed A. Portfolio`,
    description: description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Load markdown content and frontmatter
  let markdownContent = "";
  let frontmatter = {};
  if (project.markdown_path) {
    const markdown = loadMarkdownFile(project.markdown_path);
    markdownContent = markdown.content;
    frontmatter = markdown.frontmatter || {};
  }

  return (
    <ProjectDetails
      project={project}
      markdownContent={markdownContent}
      frontmatter={frontmatter}
    />
  );
}

