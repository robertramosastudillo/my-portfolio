/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
