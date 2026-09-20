import React from "react";
import { MethodSection } from "@/components/method/method-section";

export const metadata = {
  title: "The PASCON X Method | Learning Philosophy",
  description: "Learn the four-stage methodology: 01 Learn, 02 Practice, 03 Build, and 04 Grow.",
};

export default function ApproachPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              OUR METHODOLOGY
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            The PASCON <span className="text-gradient-blue">X Method</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            A structured learning philosophy designed to turn curious students into calm, methodical engineering professionals.
          </p>
        </div>
      </div>

      <MethodSection />
    </div>
  );
}
