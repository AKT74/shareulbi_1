import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  output: "export",

  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/shareulbi_1" : "",
  assetPrefix: isProd ? "/shareulbi_1/" : "",
};

export default nextConfig;
