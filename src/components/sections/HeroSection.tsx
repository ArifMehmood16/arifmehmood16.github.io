import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["RAG Systems", "Generative AI", "Cloud Architecture", "Full-Stack Development"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}Arif-Mehmood-CV.pdf`;
  const workEmail = "a.mehmood7@aston.ac.uk";
  const personalEmail = "arifmehmood9516@gmail.com";

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayed === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 pt-24 pb-16 md:pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            Arif <span className="text-gradient">Mehmood</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            AI & Cloud Engineer
          </p>
          <div className="h-10 flex items-center justify-center mb-8">
            <span className="font-mono text-lg md:text-xl text-primary">
              {displayed}
              <span className="animate-typing-cursor ml-0.5 text-primary">|</span>
            </span>
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-10 text-base md:text-lg leading-relaxed">
            Building production-grade AI systems & scalable cloud solutions.
            6+ years turning complex research into real-world software across fintech, health-tech, and academia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="glow-primary" asChild>
              <a href={cvUrl} download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${personalEmail}`}>Email Me</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a href="https://github.com/ArifMehmood16" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/aarif9516/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${workEmail}`} aria-label="Email Aston address" title={workEmail} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href={`mailto:${personalEmail}`} aria-label="Email personal address" title={personalEmail} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <a href={`mailto:${workEmail}`} className="hover:text-foreground transition-colors">
              {workEmail}
            </a>
            {" | "}
            <a href={`mailto:${personalEmail}`} className="hover:text-foreground transition-colors">
              {personalEmail}
            </a>
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="mt-10 inline-flex text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
