import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = [
    { name: "Frontend", color: "primary" },
    { name: "Backend", color: "secondary" },
    { name: "AI/ML", color: "accent" },
    { name: "Tools", color: "neon-cyan" },
  ];

  const skills: Record<string, { name: string; level: number }[]> = {
    Frontend: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Framer Motion", level: 60 },
    ],
    Backend: [
      { name: "Node.js", level: 70 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
    "AI/ML": [
      { name: "OpenAI APIs", level: 80 },
      { name: "LangChain", level: 70 },
      { name: "Vector Databases", level: 65 },
    ],
    Tools: [
      { name: "Git / GitHub", level: 70 },
      { name: "Docker", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "AWS", level:50  },
    ],
  };

  const getColorClass = (category: string) => {
    switch (category) {
      case "Frontend": return "from-primary to-primary/60";
      case "Backend": return "from-secondary to-secondary/60";
      case "AI/ML": return "from-accent to-accent/60";
      case "Tools": return "from-neon-cyan to-neon-cyan/60";
      default: return "from-primary to-primary/60";
    }
  };

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-accent">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === cat.name
                  ? "glass neon-glow-cyan border-primary/50 text-primary"
                  : "glass border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
                <span className="text-sm font-mono text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${getColorClass(activeCategory)}`}
                  style={{
                    boxShadow: `0 0 10px hsl(var(--${categories.find(c => c.name === activeCategory)?.color || "primary"}) / 0.5)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;