"use client";

import { Briefcase, Calendar } from "lucide-react";
import SectionHeader, { GlassCard } from "@/components/ui/SectionHeader";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Hands-on experience in AI/ML post-training and enterprise software development."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#4F8CFF] via-[#8B5CF6] to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                className="relative md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="absolute left-6 top-8 hidden h-4 w-4 rounded-full border-2 border-[#4F8CFF] bg-[#050816] md:block">
                  <div className="absolute inset-1 rounded-full bg-[#4F8CFF]" />
                </div>

                <GlassCard>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={18} className="text-[#4F8CFF]" />
                        <h3 className="heading-font text-xl font-semibold text-white">
                          {job.role}
                        </h3>
                      </div>
                      <p className="mt-1 text-[#00E5FF]">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400">
                      <Calendar size={14} />
                      {job.period}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F8CFF]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
