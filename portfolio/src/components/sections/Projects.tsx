"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SectionHeader, { GlassCard, TiltCard } from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Production-level full-stack applications demonstrating enterprise architecture and secure development practices."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeProject === i
                  ? "bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] text-white shadow-lg shadow-[#4F8CFF]/20"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <TiltCard>
              <div className="glass-strong overflow-hidden">
                <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#4F8CFF]/20 via-[#050816] to-[#8B5CF6]/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Layers size={48} className="mx-auto mb-4 text-[#4F8CFF]" />
                    <h3 className="heading-font text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-slate-400 mt-1">{project.subtitle}</p>
                  </div>
                  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#4F8CFF]/20 bg-[#4F8CFF]/10 px-3 py-1 text-xs font-medium text-[#4F8CFF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="heading-font mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                        Architecture
                      </h4>
                      <div className="space-y-2">
                        {project.architecture.map((layer, i) => (
                          <div key={layer} className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-[#4F8CFF]">
                              {i + 1}
                            </div>
                            <span className="text-sm text-slate-400">{layer}</span>
                            {i < project.architecture.length - 1 && (
                              <ChevronRight size={14} className="text-slate-600" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="heading-font mb-3 text-sm font-semibold uppercase tracking-wider text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <GlassCard className="!p-4">
                      <h4 className="mb-2 text-sm font-semibold text-white">Challenges</h4>
                      <ul className="space-y-1">
                        {project.challenges.map((c) => (
                          <li key={c} className="text-xs text-slate-400">• {c}</li>
                        ))}
                      </ul>
                    </GlassCard>
                    <GlassCard className="!p-4">
                      <h4 className="mb-2 text-sm font-semibold text-white">Solutions</h4>
                      <ul className="space-y-1">
                        {project.solutions.map((s) => (
                          <li key={s} className="text-xs text-slate-400">• {s}</li>
                        ))}
                      </ul>
                    </GlassCard>
                    <GlassCard className="!p-4">
                      <h4 className="mb-2 text-sm font-semibold text-white">Impact</h4>
                      <p className="text-xs text-slate-400">{project.impact}</p>
                    </GlassCard>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6] px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#4F8CFF]/25 hover:-translate-y-1"
                    >
                      <GithubIcon size={18} />
                      View on GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#4F8CFF]/50 hover:-translate-y-1"
                    >
                      <ExternalLink size={18} />
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
