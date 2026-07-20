import type { MetadataRoute } from "next";

// Required by `output: "export"` (static hosting, e.g. Firebase) — this
// route has no dynamic data anyway, so it's already effectively static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://bnotes.ai/sitemap.xml",
  };
}
