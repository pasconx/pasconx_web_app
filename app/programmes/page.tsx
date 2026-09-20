import React from "react";
import { ProgrammeGrid } from "@/components/programmes/programme-grid";

export const metadata = {
  title: "Technology Programmes | PASCON X",
  description:
    "Explore instructor-led technology programmes across DevOps, Python Full Stack, Java Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
};

export default function ProgrammesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              ACADEMIC CATALOG
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            Flagship <span className="text-gradient-blue">Technology Programmes</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Compare syllabus modules, tools, lab projects, and career outcomes for all six PASCON X engineering tracks.
          </p>
        </div>
      </div>

      <ProgrammeGrid showFilters={true} />
    </div>
  );
}
