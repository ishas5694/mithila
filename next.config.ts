import type { NextConfig } from "next";

// basePath is only needed for the GitHub Pages deploy (production build).
// In `next dev` we keep it empty so http://localhost:3000 works at the root
// like any normal Next app.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd
  ? process.env.NEXT_PUBLIC_BASE_PATH ?? "/mithila"
  : "";

const nextConfig: NextConfig = {
  // Static HTML export — writes an `out/` folder that any static host can serve.
  output: "export",

  // GitHub Pages doesn't run the Next Image optimizer.
  images: { unoptimized: true },

  basePath,
  assetPrefix: basePath || undefined,

  // Emit trailing slashes so GitHub Pages resolves /route/ → /route/index.html.
  trailingSlash: true,

  // Expose basePath to the client bundle for our asset() helper.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
