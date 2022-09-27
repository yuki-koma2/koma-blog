/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.microcms-assets.io"]
  },
  pageExtensions: ['route.ts']
}

module.exports = nextConfig
