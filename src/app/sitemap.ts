import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.teccipark.com";
  const lastModified = new Date();

  const routes = ["", "/about", "/infrastructure", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
  }));
}
