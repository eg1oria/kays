import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/kays8",
        destination: "/kays8.html",
      },
    ];
  },
};

export default nextConfig;
