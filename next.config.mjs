/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eigenjobs.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
