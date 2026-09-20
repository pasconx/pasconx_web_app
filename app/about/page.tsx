import React from "react";
import { AboutSection } from "@/components/about/about-section";
import { WhyPasconXSection } from "@/components/why-pasconx/why-pasconx-section";

export const metadata = {
  title: "About PASCON X | Technology Education Academy",
  description: "Learn about PASCON X mission, values, and practical instructor-led training model.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              ACADEMY VISION
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            About <span className="text-gradient-blue">PASCON X</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Repositioning IT education around practical engineering, hands-on lab environments, and defensible work portfolios.
          </p>
        </div>
      </div>

      <AboutSection />
      <WhyPasconXSection />
    </div>
  );
}
