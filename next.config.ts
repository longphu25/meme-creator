import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  basePath: "/meme-creator", // <=== base path for static export
  reactStrictMode: true,
};

export default nextConfig;
