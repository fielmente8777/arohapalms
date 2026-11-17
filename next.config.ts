import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  

  compress: true,

  poweredByHeader: false,

  // 301s from the client fix list (17 Nov 2026): L1, L2, L3, W3, W16, S3
  async redirects() {
    return [
      { source: "/mandrem/villa-imperial", destination: "/pilerne/villa-imperial/", permanent: true },
      { source: "/mandrem/villa-prana", destination: "/mandrem/villa-encanto/", permanent: true },
      { source: "/landing-page/villa-prana", destination: "/landing-page/villa-encanto/", permanent: true },
      { source: "/booking", destination: "/contact-us/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/5-bhk-villa-in-mandrem", destination: "/mandrem/", permanent: true },
      { source: "/articles/monsoon-bonanza-50-per-cent-off-luxury-villas-in-goa", destination: "/articles/", permanent: true },
      { source: "/destination/:location(mandrem|pilerne)/:stay", destination: "/:location/:stay/", permanent: true },
      { source: "/destination/:location(mandrem|pilerne)", destination: "/:location/", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
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
