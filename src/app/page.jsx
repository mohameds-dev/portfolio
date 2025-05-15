import ProjectsSection from "@/components/projects/ProjectsSection";
import HeroSection from "@/components/hero/HeroSection";
import ContactSection from "@/components/contact/ContactSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <main className="text-center mt-0 text-2xl">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
