import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2026 – Present",
    title: "Full Stack Developer",
    company: "Self Learning & Personal Projects",
    description: "Building full-stack web applications using React, Next.js, Node.js, Express.js, MongoDB, and modern UI technologies. Continuously improving problem-solving skills through real-world projects and exploring cloud technologies like AWS and Docker",
  },
  {
    year: "2022 – 2026",
    title: "Bachelor of Engineering",
    company: "Artificial Intelligence & Data Science",
    description: "P.R.Pote College of Engineering and Management",
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary Education(HSC)",
    company: "DR.M.K Umathe College,Nagpur"
  },
  {
    year: "2019 – 2020",
    title: "Secondary School Education(SSC)",
    company: "NOCC, Warud",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">My Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              } pl-16 md:pl-0`}
            >
              {/* Dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-primary neon-glow-blue left-[18px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                }`}
              />

              <div className="glass-card p-6 hover-glow">
                <span className="text-xs text-primary font-display font-semibold tracking-wider">{exp.year}</span>
                <h3 className="font-display font-semibold text-lg text-foreground mt-1">{exp.title}</h3>
                <p className="text-sm text-neon-cyan mb-2 flex items-center gap-1.5 justify-start md:justify-end">
                  {i % 2 !== 0 && <Briefcase size={12} />}
                  {exp.company}
                  {i % 2 === 0 && <Briefcase size={12} />}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;