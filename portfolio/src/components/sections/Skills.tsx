"use client";

import type { ElementType } from "react";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import SectionHeader, { GlassCard } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/data/portfolio";
import { motion } from "framer-motion";

const iconMap: Record<string, ElementType> = {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Brain,
  Cpu,
};

function SkillBar({ skill, index }: { skill: string; index: number }) {
  const width = 70 + ((skill.length * 7 + index * 13) % 30);

  return (
    <div className="mb-3">
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-slate-300">{skill}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#00E5FF]"
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Technical Skills"
          title="Technologies I Work With"
          description="A comprehensive toolkit spanning backend engineering, frontend development, databases, and AI/ML."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <GlassCard key={category.title} delay={i * 0.1}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F8CFF]/20 to-[#8B5CF6]/20">
                    <Icon size={20} className="text-[#4F8CFF]" />
                  </div>
                  <h3 className="heading-font text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div>
                  {category.skills.map((skill, j) => (
                    <SkillBar key={skill} skill={skill} index={j} />
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
