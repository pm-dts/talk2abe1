import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // allowedDevOrigins: ["10.30.222.76"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
