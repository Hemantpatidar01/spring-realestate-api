import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
