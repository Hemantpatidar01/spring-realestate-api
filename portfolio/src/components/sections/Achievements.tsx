"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Achievements"
          title="Impact by the Numbers"
          description="Measurable contributions across AI/ML post-training and full-stack development."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <AnimatedCounter
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
