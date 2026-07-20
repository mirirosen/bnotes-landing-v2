import type { MetadataRoute } from "next";

// Required by `output: "export"` (static hosting, e.g. Firebase) —
// lastModified below is evaluated once at build time, not per-request.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bnotes.ai/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
