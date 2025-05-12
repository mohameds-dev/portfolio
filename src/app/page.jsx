import Header from "@/components/Header";
import Link from "next/link";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="text-center mt-32 text-2xl">
      <Header />
      <ProjectsSection />
    </main>
  );
}
