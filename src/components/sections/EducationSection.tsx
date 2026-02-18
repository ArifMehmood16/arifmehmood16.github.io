import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MSc Data Science & Analytics",
    grade: "Distinction",
    institution: "Cardiff University",
    year: "2022 — 2023",
  },
  {
    degree: "BE Computer Engineering",
    grade: "",
    institution: "NUST (National University of Sciences & Technology)",
    year: "2014 — 2018",
  },
  {
    degree: "PG Diploma Strategic Management",
    grade: "",
    institution: "OTHM, UK",
    year: "2023",
  },
];

const certs = [
  "AWS Certified Cloud Practitioner",
  "Google Cloud — Machine Learning & AI",
  "Spring Boot Microservices (Udemy)",
  "Deep Learning A-Z (Udemy)",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm tracking-wider uppercase text-primary mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Degrees
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5"
              >
                <p className="font-semibold">
                  {edu.degree}
                  {edu.grade && <span className="text-primary ml-2">({edu.grade})</span>}
                </p>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{edu.year}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm tracking-wider uppercase text-primary mb-4 flex items-center gap-2">
              <Award className="h-4 w-4" /> Certifications
            </h3>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-xl p-5 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <p className="text-sm font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
