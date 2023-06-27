/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: true,
  compress: true,
}

module.exports = nextConfig
