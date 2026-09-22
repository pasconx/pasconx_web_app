import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire With Us | PASCON X",
  description:
    "Partner with PASCON X to hire skilled technology talent. Connect with trained learners across DevOps, Full Stack Development, Data Analytics, Cybersecurity, and AI/ML Engineering.",
  keywords: [
    "hire tech talent",
    "technology hiring",
    "DevOps engineers",
    "full stack developers",
    "data analysts",
    "cybersecurity professionals",
    "AI ML engineers",
    "PASCON X employers",
    "campus recruitment",
    "tech talent partnership",
  ],
};

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
