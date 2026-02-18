import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AI Software Engineer (KTP Associate)",
    company: "BioCare / Aston University",
    period: "Jan 2026 — Present",
    bullets: [
      "Leading AI-driven health recommendation system integrating personalised nutrition with NLP-based customer insights",
      "Designing RAG pipelines and LLM-powered tools for internal knowledge management",
      "Collaborating across academic and commercial teams to translate research into deployable products",
    ],
    tech: ["Python", "RAG", "LLMs", "AWS", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Software Engineer",
    company: "Cardiff University",
    period: "Dec 2023 — Jan 2026",
    bullets: [
      "Built MetaphorShare — an NLP research platform with LLaMA 2 integration and RAG-based metaphor retrieval",
      "Developed SevRes — an AWS event-driven ETL platform for severe weather research with Kibana dashboards",
      "Created GenAI Assistant using FastAPI, Ollama, and local LLMs for document Q&A",
    ],
    tech: ["Java 17", "Spring Boot", "React", "AWS", "LLaMA 2", "Docker", "Elasticsearch"],
  },
  {
    title: "Senior Software Engineer",
    company: "Confiz — FinTech SaaS",
    period: "Mar 2021 — Sep 2022",
    bullets: [
      "Led monolith-to-microservices migration achieving 99.99% uptime on Spring Cloud stack",
      "Mentored 4-person team, established code review culture and CI/CD pipelines",
      "Integrated real-time payment processing with Kafka event streaming",
    ],
    tech: ["Spring Boot", "Kafka", "Microservices", "PostgreSQL", "CI/CD", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Afiniti — AI & Analytics",
    period: "Apr 2020 — Mar 2021",
    bullets: [
      "Developed ML-based lead scoring models (GLM, XGBoost, Random Forest) for insurance vertical",
      "Built ETL pipelines and automated testing frameworks for AI model validation",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "SQL", "TDD"],
  },
  {
    title: "Junior Software Engineer",
    company: "UWorx — Flooid POS",
    period: "Jun 2019 — Apr 2020",
    bullets: [
      "Developed point-of-sale features for major UK retailers using Java and Spring",
      "Collaborated in Agile sprints with cross-functional global team",
    ],
    tech: ["Java", "Spring", "Agile", "REST APIs"],
  },
  {
    title: "Associate Software Engineer",
    company: "Grid Systems — Global Rescue",
    period: "Sep 2018 — Jun 2019",
    bullets: [
      "Built backend services for emergency response platform",
      "Implemented RESTful APIs and database optimisations in Django stack",
    ],
    tech: ["Django", "Python", "PostgreSQL", "REST APIs"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Career <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="glass rounded-xl p-6">
                  <p className="text-xs font-mono text-primary mb-1">{exp.period}</p>
                  <h3 className="text-lg font-semibold mb-0.5">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
