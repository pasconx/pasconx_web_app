import React from "react";
import { UpcomingCohorts } from "@/components/upcoming/upcoming-cohorts";

export const metadata = {
  title: "Upcoming Programmes & Cohorts | PASCON X",
  description: "View upcoming cohort dates, mode, duration, and status across all technology tracks.",
};

export default function UpcomingPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              COHORT SCHEDULE
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            Upcoming <span className="text-gradient-blue">Cohorts</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Explore live online cohort schedules and enrolment status across all 6 core technology domains.
          </p>
        </div>
      </div>

      <UpcomingCohorts />
    </div>
  );
}
