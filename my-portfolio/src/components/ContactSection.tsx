import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import axios from "axios"
import { RESEND_API_END_POINT } from "../utils/constant.js"
import { toast } from "sonner";

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/priyaal01" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/priyaal-gayakwad/" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/priyaal_gayakwad/" },
  { icon: SiLeetcode, label: "Email", href: "https://leetcode.com/u/priyaal_01/" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      
      const res = await axios.post(`${RESEND_API_END_POINT}/contact`, {
        name,
        email,
        message
      });
      if (res.data.success) {
        toast.success("Email Sent Successfully");
      }


    } catch (error) {
      console.log(error)
      toast.error("Something went wrong");
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  placeholder={field.label}
                  onChange={(e) =>
                    field.name === "name"
                      ? setName(e.target.value)
                      : setEmail(e.target.value)
                  }
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border text-foreground placeholder:text-muted-foreground font-body text-sm outline-none transition-all duration-300 ${focused === field.name
                    ? "border-primary neon-border"
                    : "border-border"
                    }`}
                />
              </div>
            ))}
            <div className="relative">
              <textarea
                placeholder="Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 rounded-xl bg-muted/50 border text-foreground placeholder:text-muted-foreground font-body text-sm outline-none resize-none transition-all duration-300 ${focused === "message"
                  ? "border-primary neon-border"
                  : "border-border"
                  }`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold hover-glow neon-glow-blue transition-all hover:scale-105"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech and design.
              Feel free to reach out!
            </p>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all hover:scale-110"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;