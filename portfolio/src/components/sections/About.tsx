"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader, { GlassCard } from "@/components/ui/SectionHeader";
import { aboutHighlights } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="Building Production-Ready Software"
          description="A passionate Java Full Stack Developer focused on secure, scalable enterprise applications and modern AI engineering."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="heading-font mb-4 text-xl font-semibold text-white">
              Professional Story
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I architect and deliver secure, role-based web applications using Java, Spring Boot,
                Spring Security, JWT, React.js, and MySQL. My work spans the full software development
                lifecycle — from database design and REST API development to responsive frontend
                interfaces and production deployment.
              </p>
              <p>
                Beyond traditional full-stack development, I bring applied AI experience from my
                role as an LLM Post-Training Intern at Ethara AI, where I contributed to model
                evaluation, instruction tuning, and systematic failure analysis across multiple domains.
              </p>
              <p>
                As an MCA candidate at DAVV with strong foundations in Data Structures, Algorithms,
                OOP, and DBMS, I combine technical depth with leadership experience as Vice President
                of DAVV University, demonstrating my ability to collaborate, communicate, and deliver
                results in team environments.
              </p>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item, i) => (
              <motion.div
                key={item}
                className="glass flex items-start gap-3 p-4 transition-all hover:border-[#4F8CFF]/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#22C55E]" />
                <span className="text-sm text-slate-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
