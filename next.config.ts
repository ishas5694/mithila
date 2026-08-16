import type { NextConfig } from "next";

// Repo name — pages will be served at https://<user>.github.io/<REPO>/.
// Override with NEXT_PUBLIC_BASE_PATH (e.g. "" for a user page or custom domain).
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "/mithila";

const nextConfig: NextConfig = {
  // Static HTML export — writes an `out/` folder that any static host can serve.
  output: "export",

  // GitHub Pages doesn't run the Next Image optimizer.
  images: { unoptimized: true },

  basePath,
  assetPrefix: basePath || undefined,

  // Emit trailing slashes so GitHub Pages resolves /route/ → /route/index.html.
  trailingSlash: true,

  // Expose basePath to the client bundle for our asset() helper (raw <img>/<video>).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
