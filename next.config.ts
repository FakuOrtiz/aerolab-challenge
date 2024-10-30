import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.igdb.com",
      },
    ],
  },
};

export default nextConfig;
