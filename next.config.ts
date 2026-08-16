import type { NextConfig } from "next";

// If deploying under https://<user>.github.io/<REPO>/  (project-page URL),
// set NEXT_PUBLIC_BASE_PATH="/<REPO>" in the CI env. For a *.github.io user/org
// page, or a custom domain, leave it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export — writes an `out/` folder that any static host can serve.
  output: "export",

  // GitHub Pages doesn't run the Next Image optimizer, so ship images as-is.
  images: { unoptimized: true },

  // Project-page URL prefix (empty for user/org page or custom domain).
  basePath,
  assetPrefix: basePath || undefined,

  // Emit trailing slashes so GitHub Pages resolves /route/ → /route/index.html.
  trailingSlash: true,
};

export default nextConfig;
