import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MetaphorShare: Cardiff University NLP",
    description:
      "A web application designed for NLP metaphor researchers to share and collaborate on datasets, with a built-in tool for labelling datasets efficiently.",
    tech: ["NLP", "React", "Spring Boot", "PostgreSQL", "Dataset Labelling"],
    link: "https://www.metaphorshare.com/",
  },
  {
    title: "Trafred",
    description:
      "Tool developed for the Welsh Government Transport Department, providing transport reporting based on a data model designed by Cardiff University academics and funded by the Green Alliance Project.",
    tech: ["Transport Reporting", "Data Modelling", "React", "Spring Boot"],
    link: "https://trafred.cardiff.ac.uk/",
  },
  {
    title: "SevRes 5",
    description:
      "A full-stack ETL solution with a ReactJS frontend for data submission and reporting, and an AWS-powered backend including Lambda, API Gateway, Elasticsearch, and more.",
    tech: ["React", "AWS Lambda", "API Gateway", "Elasticsearch", "ETL"],
    link: "https://sevres.co.uk/",
  },
  {
    title: "SecMoF (GitHub)",
    description:
      "An open-source dependency modelling tool for cybersecurity professionals, used to model systems and precautionary measures with playbooks and dependency models. Actively used in the MSc Cyber Security programme at Cardiff University.",
    tech: ["Cybersecurity", "Dependency Modelling", "Playbooks", "Open Source"],
    link: "https://github.com/CardiffUniCOMSC/SecMoF",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6 group hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold group-hover:text-primary transition-colors hover:text-primary"
                >
                  {project.title}
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="text-muted-foreground opacity-80 group-hover:opacity-100 hover:text-primary transition-colors shrink-0 mt-1"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-xs text-primary hover:underline"
              >
                Visit project <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
