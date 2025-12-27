import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/shareulbi_1",
  assetPrefix: "/shareulbi_1/",
};

export default nextConfig;
