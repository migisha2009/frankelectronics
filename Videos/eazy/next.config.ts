import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily disable Turbopack due to SWC helpers issue
  // turbopack: {
  //   root: __dirname,
  // },
};

export default nextConfig;
