/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sicklecellfoundation.com",
      },
    ],
  },
};

module.exports = nextConfig;
