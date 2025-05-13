import ProjectsSection from "@/components/projects/ProjectsSection";
import HeroSection from "@/components/hero/HeroSection";
export default function Home() {
  return (
    <main className="text-center mt-0 text-2xl">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
