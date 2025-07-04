/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'demo.wp-api.org', // Demo WordPress site for testing
      // Add your actual WordPress domain here when you configure it
      // 'your-wordpress-site.com',
    ],
  },
};

module.exports = nextConfig;