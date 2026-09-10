import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://openweathermap.org',
        port: '',
        pathname: '/img/wn/04n@2x.png',
      },
    ],
  },
};

export default nextConfig;
