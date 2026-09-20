import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
