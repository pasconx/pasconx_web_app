import React from "react";
import { LearningModelSection } from "@/components/learning-model/learning-model-section";

export const metadata = {
  title: "Learning Model Flow | PASCON X",
  description: "Architectural learning model flow: Foundation -> Concept -> Lab -> Project -> Review -> Career.",
};

export default function LearningModelPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              PEDAGOGICAL PIPELINE
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            Learning Model <span className="text-gradient-blue">Architecture</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            From foundational tools to production builds, code reviews, and career handoffs.
          </p>
        </div>
      </div>

      <LearningModelSection />
    </div>
  );
}
