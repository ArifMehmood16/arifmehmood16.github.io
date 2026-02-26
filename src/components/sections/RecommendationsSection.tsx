import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const recommendations = [
  {
    name: "Joel Simpson",
    role: "Business Analyst (contract)",
    date: "April 7, 2025",
    company: "CU DTII / National SevRes dashboard collaboration",
    relationship: "Worked with Arif at different companies",
    text: "I really enjoyed working with Arif in CU DTII on the creation of a national SevRes* dashboard application. Arif is a very capable technical developer but I was most impressed by how Arif was very responsive to enable rapid co-creation of the initial demonstration version and then how he engaged and was a genuine key contributor to the iterative collaborative development of the full ‘production’ version of the app. As a BA, it’s really awesome to be able to work so collaboratively with Devs in this way, Arif’s ideas and experience as well as his technical knowledge really helped shape the final product/ application….. it would be great to work together again which I guess it the ultimate recommendation. SevRes - a standardised methodology used for recording mental health data in student support services in all Welsh HEIs & FEIs",
  },
  {
    name: "Joanne Boisson",
    role: "PhD Student in Natural Language Processing",
    date: "March 19, 2025",
    company: "Cardiff University / MetaphorShare",
    relationship: "Worked with Arif on the same team",
    text: "Working with Arif on the MetaphorShare project has been a pleasure.  Arif developed the entire website (www.metaphorshare.com), and remained committed to the project while his professional situation was evolving. On the top of his web dev skills, his reliability, experience, organisational and communication skills made possible the completion of this project,  leading to the publication of our work in a NAACL 2025 System Demonstration paper (https://arxiv.org/abs/2411.18260).",
  },
  {
    name: "Vijay Babu",
    role: "Senior Java Consultant",
    date: "March 31, 2022",
    company: "PCMS Ltd (now Flooid)",
    relationship: "Senior to Arif (did not manage directly)",
    text: "I worked with Arif within PCMS Ltd (Now Flooid) and found him a talented software engineer, good at working through issues logically whilst identifying and presenting solutions. Arif works really well as part of a team as is dedicated to getting the job done.",
  },
  {
    name: "Irshad Ahmad",
    role: "Building financial applications that works like a charm",
    date: "March 14, 2022",
    company: "Confiz",
    relationship: "Managed Arif directly",
    text: "I worked with Arif back in the days of Confiz and had a wonderful experience working with him. To start with, the best thing about working with him is that, He is not afraid of taking problems head-on, which makes him one of the key resources where even he goes. He is always interested in learning new things which keeps his learning curve very sharp. I once requested him to work on React-JS with which he was totally unfamiliar, but after a couple of weeks of training, he was right up there with the other experienced React-JS resource.  He is not only a very sound developer but also a humble human being, which makes him even more desirable to have him in any team. I will definitely pull him in my team whenever I will get another chance :)",
  },
  {
    name: "Mark Earl",
    role: "Agile Software Delivery Manager",
    date: "March 3, 2022",
    company: "PCMS Ltd (now Flooid)",
    relationship: "Worked with Arif in the same Agile Scrum team",
    text: "Arif is a very talented all-round developer. He is able to turn his hand to all manner of technical challenges and approaches each one of them with great consideration and care. I worked with Arif in an Agile Scrum team where he really excelled due to the attributes above, and also excellent communication skills with his peers. He offered other team members support where needed and was also clear on any challenges he might have and when the team could help. It would be a pleasure to be able to work with him again",
  },
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Recommendations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            People Who <span className="text-gradient">Worked With Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((item, i) => (
            <motion.article
              key={`${item.name}-${item.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {item.name}
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
                <p className="text-xs font-mono text-primary shrink-0">{item.date}</p>
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                {item.relationship} · {item.company}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
