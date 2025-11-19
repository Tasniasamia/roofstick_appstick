import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  env: {
    backend_url:
      process.env.NODE_ENV === "production"
        ? "https://api-roofstick.appstick.com.bd/"
        : "https://api-roofstick.appstick.com.bd/",

    socket_url: "https://api-roofstick.appstick.com.bd/",
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
