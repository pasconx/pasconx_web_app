import type { Metadata } from "next";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { StructuredData } from "@/components/seo/StructuredData";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "PASCON X",
  url: "https://pasconx.in",
  logo: "https://pasconx.in/assets/brand/px-logo.svg",
  description: "Practical technology training across DevOps, Python Full Stack, Java Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
  sameAs: ["https://www.instagram.com/pasconx_academy"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pasconx.in"),
  title: { default: "PASCON X | Transforming Talent to IT Xperts", template: "%s | PASCON X" },
  description: "PASCON X provides practical technology training across DevOps, Python Full Stack, Java Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
  applicationName: "PASCON X",
  keywords: [
    "IT training institute",
    "DevOps training",
    "Python full stack course",
    "Java full stack course",
    "Data analytics training",
    "Cybersecurity training",
    "SOC analyst training",
    "AI ML engineer course",
    "PASCON X",
    "PasconX",
  ],
  authors: [{ name: "PASCON X" }],
  creator: "PASCON X",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "PASCON X",
    title: "PASCON X | Transforming Talent to IT Xperts",
    description: "Practical technology training in DevOps, Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PASCON X | Transforming Talent to IT Xperts",
    description: "Practical technology training in DevOps, Full Stack, Data Analytics, Cybersecurity, and AI/ML Engineering.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pasconx-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider>
          <StructuredData data={organizationSchema} />
          <a className="skip-link" href="#main-content">Skip to main content</a>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
