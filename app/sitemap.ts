import { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";
import { getAllProgrammeSlugs } from "@/lib/programmeDetailData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.website;

  const routes = [
    "",
    "/programmes",
    "/approach",
    "/learning-model",
    "/upcoming",
    "/about",
    "/contact",
    "/hire",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const programmeRoutes = getAllProgrammeSlugs().map((slug) => ({
    url: `${baseUrl}/programmes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...programmeRoutes];
}
