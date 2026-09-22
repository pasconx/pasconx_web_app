import React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { ProgrammeGrid } from "@/components/programmes/programme-grid";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata = {
  title: "Technology Programmes | PASCON X",
  description:
    "Explore instructor-led technology programmes across DevOps, Python Full Stack, Java Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
};

export default function ProgrammesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20 min-h-screen">
        <ProgrammeGrid showFilters={true} />
        <SiteFooter />
      </main>
    </>
  );
}
