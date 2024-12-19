import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/iccmw-web-app',
  assetPrefix: '/iccmw-web-app/',
  
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iccmw.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
