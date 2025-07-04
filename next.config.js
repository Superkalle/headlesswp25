/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['deine-wp-domain.de'], // WordPress-Bilder
  },
};

module.exports = nextConfig;
