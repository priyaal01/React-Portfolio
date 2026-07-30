import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["LET'S", "BUILD", "SOMETHING", "TOGETHER"];

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"words" | "full" | "exit">("words");

  useEffect(() => {
    // After all words animate in, show full text briefly
    const fullTimer = setTimeout(() => setPhase("full"), words.length * 400 + 600);
    // Then slide up
    const exitTimer = setTimeout(() => setPhase("exit"), words.length * 400 + 1800);
    // Then unmount
    const doneTimer = setTimeout(() => onComplete(), words.length * 400 + 2600);

    return () => {
      clearTimeout(fullTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.4,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className={i === 2 ? "gradient-text text-glow" : "text-foreground"}>
                {word}
              </span>
            </motion.span>
          ))}

          {/* Underline glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: words.length * 0.4 + 0.2, duration: 0.8, ease: "easeOut" }}
            className="h-[2px] w-48 md:w-72 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;