import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Building2 } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "6+" },
  { icon: Building2, label: "Industries", value: "4" },
  { icon: GraduationCap, label: "MSc Distinction", value: "🎓" },
  { icon: Award, label: "AWS Certified", value: "☁️" },
];

const AboutSection = () => {
  const logoUrl = `${import.meta.env.BASE_URL}favicon-portfolio.png`;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] mb-12">
            <div className="relative mx-auto w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
              <img
                src={logoUrl}
                alt="Arif Mehmood logo blur"
                className="absolute inset-0 w-full h-full object-contain blur-2xl opacity-45 scale-110 pointer-events-none select-none"
              />
              <img
                src={logoUrl}
                alt="Arif Mehmood logo"
                className="relative w-full h-full object-contain rounded-2xl"
              />
            </div>

            <div>
              <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">About</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Turning Research Into <span className="text-gradient">Production Systems</span>
              </h2>
              <p className="max-w-3xl text-muted-foreground text-base md:text-lg leading-relaxed">
                AI Software Engineer focused on taking ideas from concept to production and supporting them at scale. I am currently building a personalised healthcare product from the ground up, combining machine learning and generative AI to deliver real-world impact. My work spans infrastructure design, architecture, development, testing, and governance, including GDPR and responsible AI compliance.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
