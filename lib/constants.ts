export const BRAND = {
  name: "PASCON X",
  tagline: "Transforming Talent to IT Xperts",
  headlineLeading: "Build skills.",
  headlineAccent: "Think one step ahead.",
  description:
    "Practical, instructor-led technology training built around hands-on learning, real-world projects, and career-ready technical skills.",
  phone: "+91 94412 76060",
  rawPhone: "919441276060",
  email: "connect@pasconx.com",
  location: "Virtual / Online (Live Cohorts)",
  website: "https://pasconx.in",
  socials: {
    instagram: "https://www.instagram.com/pasconx_academy",
    linkedin: "https://www.linkedin.com/company/pasconx",
    youtube: "https://www.youtube.com/@pasconx",
  },
};

export const NAV_LINKS = [
  { name: "APPROACH", href: "/approach" },
  { name: "PROGRAMMES", href: "/programmes" },
  { name: "LEARNING MODEL", href: "/learning-model" },
  { name: "UPCOMING", href: "/upcoming" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export const WHATSAPP_LINK = (programmeName?: string) => {
  const text = programmeName
    ? `Hello PasconX Team,\n\nI am interested in learning more about the ${programmeName} programme.\nCould you please share details regarding syllabus, schedule, upcoming cohort dates, and enrolment procedures?\n\nThank you.`
    : `Hello PasconX Team,\n\nI would like guidance on choosing the right technology programme at PasconX.\nCould you please share details on available options, upcoming cohort dates, and enrolment procedures?\n\nThank you.`;
  return `https://wa.me/${BRAND.rawPhone}?text=${encodeURIComponent(text)}`;
};
