import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  

  compress: true,

  poweredByHeader: false,

  // 301s from the client fix list (17 Nov 2026): L1, L2, L3, W3, W16, S3
  async redirects() {
    return [
      { source: "/mandrem/villa-imperial", destination: "/pilerne/villa-imperial/", statusCode: 301 },
      { source: "/mandrem/villa-prana", destination: "/mandrem/villa-encanto/", statusCode: 301 },
      { source: "/landing-page/villa-prana", destination: "/landing-page/villa-encanto/", statusCode: 301 },
      { source: "/booking", destination: "/contact-us/", statusCode: 301 },
      { source: "/contact", destination: "/contact-us/", statusCode: 301 },
      { source: "/5-bhk-villa-in-mandrem", destination: "/mandrem/", statusCode: 301 },
      { source: "/articles/monsoon-bonanza-50-per-cent-off-luxury-villas-in-goa", destination: "/articles/", statusCode: 301 },
      { source: "/destination/:location(mandrem|pilerne)/:stay", destination: "/:location/:stay/", statusCode: 301 },
      { source: "/destination/:location(mandrem|pilerne)", destination: "/:location/", statusCode: 301 },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", statusCode: 301 },
    ];
  },

  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "swiper"],

    optimizeCss: true,

    scrollRestoration: true,
  },
};

export default nextConfig;
