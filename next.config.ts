import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/politica-de-privacidad-muud-spa",
        destination: "/politica-de-privacidad",
        permanent: true,
      },
      {
        source: "/:locale/politica-de-privacidad-muud-spa",
        destination: "/:locale/politica-de-privacidad",
        permanent: true,
      },
      {
        source: "/terminos-y-condiciones-muud-spa",
        destination: "/terminos-y-condiciones",
        permanent: true,
      },
      {
        source: "/:locale/terminos-y-condiciones-muud-spa",
        destination: "/:locale/terminos-y-condiciones",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
