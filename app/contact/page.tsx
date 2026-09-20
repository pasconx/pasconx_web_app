import React from "react";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata = {
  title: "Contact PASCON X | Admissions & Guidance",
  description: "Get in touch with Pascon X tutors regarding enrolment, schedule, and course guidance.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-surface/50 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-foreground">
            Contact <span className="text-gradient-blue">PASCON X</span>
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-2xl">
            Ask questions regarding upcoming cohort dates, prerequisites, syllabus modules, or enrolment.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
