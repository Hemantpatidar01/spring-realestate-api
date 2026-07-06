"use client";

import { GraduationCap, Calendar } from "lucide-react";
import SectionHeader, { GlassCard } from "@/components/ui/SectionHeader";
import { education } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Education"
          title="Academic Background"
          description="Strong academic foundation in computer science from DAVV University, Indore."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#4F8CFF] via-[#8B5CF6] to-transparent md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className={`flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <GlassCard>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F8CFF]/20 to-[#8B5CF6]/20">
                        <GraduationCap size={24} className="text-[#4F8CFF]" />
                      </div>
                      <div>
                        <h3 className="heading-font text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="mt-1 text-sm text-[#00E5FF]">{edu.institution}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 px-3 py-0.5 text-xs text-[#22C55E]">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
