import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  compress: true,
  experimental: { optimizePackageImports: ["lucide-react", "react-icons/fa6"] },
  async redirects() {
    return [
      { source: "/blog", destination: "/fashion-design-blog", permanent: true },
      { source: "/services", destination: "/fashion-design-services", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};
export default config;
