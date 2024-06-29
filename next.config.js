/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.ctfassets.net"],
  },
  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
