/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow Behance's image CDNs so remote project covers can be optimized by next/image.
    remotePatterns: [
      { protocol: "https", hostname: "mir-s3-cdn-cf.behance.net" },
      { protocol: "https", hostname: "mir-cdn.behance.net" },
    ],
  },
};

export default nextConfig;
