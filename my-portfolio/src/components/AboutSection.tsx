import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Globe } from "lucide-react";

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript"},
  { name: "Tailwind"},
  { name: "Next.js" },
  { name: "Node.js"},
  { name: "Python"},
  { name: "Git"},
  { name: "MongoDB"},
];

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Maintainable & scalable" },
  { icon: Palette, label: "Design", desc: "Pixel-perfect UI" },
  { icon: Zap, label: "Performance", desc: "Lightning fast" },
  { icon: Globe, label: "Responsive", desc: "Every device" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 hover-glow"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a <span className="font-semibold text-white">Full-Stack Developer</span> and AI & Data Science graduate passionate about building scalable, user-focused web applications. I specialize in React, Next.js, Node.js, Express, and MongoDB, with experience developing production-ready platforms including recruitment systems and e-learning applications. I enjoy turning complex problems into clean, responsive, and high-performance solutions while continuously learning modern technologies. My goal is to create impactful software that delivers exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h,) => (
                <div
                  key={h.label}
                  className="glass-card p-4 text-center hover-glow group cursor-default"
                >
                  <h.icon className="mx-auto mb-2 text-primary group-hover:text-neon-cyan transition-colors" size={24} />
                  <p className="font-display font-semibold text-sm text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-center text-sm text-muted-foreground mb-6 font-display tracking-wider uppercase">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="glass-card px-5 py-3 flex items-center gap-2 hover-glow hover:scale-105 transition-transform cursor-default"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;