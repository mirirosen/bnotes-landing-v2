import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route on this site is already fully static (confirmed by the
  // build output — "○ Static, prerendered as static content" for all of
  // them). Static export lets Firebase Hosting serve it as plain files,
  // with no Cloud Functions/Cloud Run backend needed for a first deploy.
  output: "export",
  images: {
    // No Node image-optimization server under static export.
    unoptimized: true,
  },
};

export default nextConfig;
