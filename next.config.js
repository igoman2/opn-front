/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/search",
      },
    ];
  },
};

module.exports = nextConfig;
