import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Per-request nonces would lock every page into dynamic rendering. This site has
 * no user-generated content or auth, so 'unsafe-inline' for Next's bootstrap
 * scripts is an accepted trade-off; the policy still blocks loading scripts or
 * sending data anywhere not listed. New third parties must be added here
 * deliberately, and need a privacy review first.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://back.muud.app",
  "frame-src https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Omits includeSubDomains/preload until every *.muud.app host is confirmed
  // HTTPS-only: both are hard to undo.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  // Dev needs eval and websockets for HMR, so the CSP only applies to builds.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
    : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
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
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
