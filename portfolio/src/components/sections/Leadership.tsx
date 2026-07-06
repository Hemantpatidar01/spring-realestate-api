"use client";

import { Users, Award } from "lucide-react";
import SectionHeader, { GlassCard } from "@/components/ui/SectionHeader";
import { leadership } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Leadership"
          title="Beyond Code"
          description="Demonstrating leadership, teamwork, and organizational excellence in academic and community settings."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#4F8CFF]/20">
                    {i === 0 ? (
                      <Award size={24} className="text-[#8B5CF6]" />
                    ) : (
                      <Users size={24} className="text-[#8B5CF6]" />
                    )}
                  </div>
                  <div>
                    <h3 className="heading-font text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-[#00E5FF]">{item.organization}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
