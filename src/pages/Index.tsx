import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import RecommendationsSection from "@/components/sections/RecommendationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <RecommendationsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arif Mehmood. Built with precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
