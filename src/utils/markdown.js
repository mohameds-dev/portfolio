import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function loadMarkdownFile(filePath) {
  try {
    // Resolve the file path relative to the project root
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    
    return {
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error loading markdown file ${filePath}:`, error);
    return {
      frontmatter: {},
      content: "",
    };
  }
}

