import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MetaphorShare",
    description: "NLP research platform enabling metaphor discovery and sharing through LLaMA 2 integration with RAG-based retrieval and prompt engineering pipelines.",
    tech: ["LLaMA 2", "RAG", "React", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "SevRes — Severe Weather ETL",
    description: "AWS event-driven ETL platform processing severe weather research data with automated ingestion, OpenSearch indexing, and Kibana dashboards.",
    tech: ["AWS Lambda", "S3", "OpenSearch", "Kibana", "Python", "Terraform"],
  },
  {
    title: "GenAI Assistant",
    description: "Generative AI RAG web application using FastAPI and locally-hosted LLMs via Ollama for secure document Q&A without third-party API dependencies.",
    tech: ["FastAPI", "Ollama", "RAG", "React", "Python", "Docker"],
  },
  {
    title: "Lead Scoring System",
    description: "ML-powered lead scoring for insurance vertical using ensemble models (GLM, XGBoost, Random Forest) with automated validation pipelines.",
    tech: ["Python", "Scikit-learn", "XGBoost", "SQL", "Pandas"],
  },
  {
    title: "FinTech Microservices Migration",
    description: "Led migration from monolithic architecture to Spring Cloud microservices, achieving 99.99% uptime with Kafka event streaming and CI/CD automation.",
    tech: ["Spring Cloud", "Kafka", "Docker", "PostgreSQL", "CI/CD"],
  },
  {
    title: "Health Recommendation System",
    description: "AI-powered personalised health and nutrition recommendation platform at BioCare, integrating NLP-based customer insights with product knowledge graphs.",
    tech: ["Python", "RAG", "LLMs", "AWS", "FastAPI", "PostgreSQL"],
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
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
