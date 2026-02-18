import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "AI & ML",
    skills: ["Python", "Scikit-learn", "XGBoost", "RAG", "LLMs", "Prompt Engineering", "Ollama", "LLaMA 2", "Hugging Face"],
  },
  {
    title: "Backend",
    skills: ["Java 17", "Spring Boot", "FastAPI", "Django", "Node.js", "Microservices", "REST APIs", "GraphQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "Flutter", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS Cognito", "S3", "EC2", "API Gateway", "Amplify", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "DynamoDB", "Elasticsearch", "OpenSearch", "Kafka", "Redis", "MongoDB"],
  },
  {
    title: "Practices",
    skills: ["TDD", "SOLID", "OWASP", "Agile/Scrum", "GDPR", "Pair Programming", "Code Review"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-semibold text-primary mb-4 font-mono text-sm tracking-wider uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-normal text-xs">
                    {skill}
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

export default SkillsSection;
