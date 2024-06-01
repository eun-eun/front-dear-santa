/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loaderFile: './image-loader.js',
  },
  generateBuildId: async () => {
    const timestamp = new Date().getTime().toString();
    const randomStr = Math.random().toString(36).substring(2);
    const buildId = `${process.env.NEXT_PUBLIC_VERSION}-${timestamp}-${randomStr}`;
    return buildId;
  },
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
