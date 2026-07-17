import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  turbopack: {
    root: process.cwd()
  },
  async redirects() {
    return ["toleo.at", "www.toleo.at"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.toleo.biz/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
