import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

  images: {
    domains: ['fakestoreapi.com'],
  },
};

export default nextConfig;
