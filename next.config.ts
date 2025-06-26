import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "avatars.githubusercontent.com",
      "picsum.photos",
      "loremflickr.com",
      "i.ibb.co",
    ],
  },
};

export default nextConfig;
