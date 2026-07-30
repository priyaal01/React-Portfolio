// import { motion } from "framer-motion";
// import { ArrowDown, ExternalLink } from "lucide-react";
// import { useEffect, useState } from "react";

// const roles = ["Frontend Developer", "UI/UX Designer", "Creative Coder"];

// const HeroSection = () => {
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);

//   useEffect(() => {
//     const currentRole = roles[roleIndex];
//     if (typing) {
//       if (displayed.length < currentRole.length) {
//         const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
//         return () => clearTimeout(t);
//       } else {
//         const t = setTimeout(() => setTyping(false), 2000);
//         return () => clearTimeout(t);
//       }
//     } else {
//       if (displayed.length > 0) {
//         const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
//         return () => clearTimeout(t);
//       } else {
//         setRoleIndex((i) => (i + 1) % roles.length);
//         setTyping(true);
//       }
//     }
//   }, [displayed, typing, roleIndex]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
//       {/* Gradient orbs */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
//       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

//       <div className="relative z-10 text-center max-w-4xl mx-auto">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
//         >
//           Welcome to my portfolio
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
//         >
//           <span className="px-4 py-2 text-sm font-medium rounded-full glass border border-primary/30 text-primary">
//             Available for opportunities
//           </span>
//           <span className="text-foreground">I craft </span>
//           <span className="gradient-text text-glow">digital</span>
//           <br />
//           <span className="text-foreground">experiences</span>
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="h-8 mb-8"
//         >
//           <span className="text-xl md:text-2xl text-muted-foreground font-body">
//             {displayed}
//           </span>
//           <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-glow-pulse" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <a
//             href="#projects"
//             className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold hover-glow neon-glow-blue transition-all hover:scale-105"
//           >
//             View Projects <ExternalLink size={16} />
//           </a>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary/30 text-primary font-display font-semibold hover:bg-primary/10 transition-all hover:scale-105"
//           >
//             Contact Me
//           </a>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.4 }}
//           className="mt-20"
//         >
//           <a href="#about" className="inline-block animate-float" aria-label="Scroll down">
//             <ArrowDown className="text-muted-foreground" size={24} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
// import AnimatedText from "../AnimatedText";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  const roles = [
    "Frontend Developer",
    "Full Stack Learner",
    "AI Enthusiast",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 text-sm font-medium rounded-full glass border border-primary/30 text-primary">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="gradient-text neon-text-cyan">Priyaal Gayakwad</span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="text-primary">&lt;</span>
            {/* <AnimatedText texts={roles} className="text-foreground font-medium w-48" /> */}
            <span className="text-primary">/&gt;</span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Crafting digital experiences that blend stunning visuals with 
            cutting-edge technology. Passionate about building the future, one pixel at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2 text-primary-foreground font-semibold">
                <ExternalLink className="w-4 h-4" />
                View Projects
              </span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 rounded-lg font-medium glass border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover-glow"
            >
              <span className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                Contact Me
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;