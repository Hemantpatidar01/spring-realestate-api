"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  FolderKanban,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center section-padding pt-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <motion.p
            className="mb-4 text-lg text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Hi, I&apos;m
          </motion.p>

          <h1 className="heading-font text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="heading-font mt-4 text-2xl font-medium text-slate-300 md:text-3xl">
            {personalInfo.title}
          </p>

          <div className="mt-4 h-8">
            <TypingAnimation
              titles={personalInfo.typingTitles}
              className="text-lg text-[#00E5FF] md:text-xl"
            />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#4F8CFF]/30 hover:-translate-y-1"
            >
              <Download size={18} className="transition-transform group-hover:scale-110" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F8CFF]/50 hover:bg-white/10 hover:-translate-y-1"
            >
              <FolderKanban size={18} />
              View Projects
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F8CFF]/50 hover:bg-white/10 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F8CFF]/50 hover:bg-white/10 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F8CFF]/50 hover:bg-white/10 hover:-translate-y-1"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="relative h-[450px] w-[450px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4F8CFF]/20 to-[#8B5CF6]/20 blur-3xl animate-pulse-glow" />
            <div className="glass-strong relative flex h-full w-full flex-col items-center justify-center p-8 animate-float">
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-[#4F8CFF] via-[#00E5FF] to-[#8B5CF6] p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#050816]">
                  <span className="heading-font text-5xl font-bold gradient-text">HP</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {["Java", "Spring Boot", "React", "MySQL"].map((tech) => (
                  <div
                    key={tech}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs text-slate-400">Available for opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#4F8CFF] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
