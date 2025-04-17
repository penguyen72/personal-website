/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leetpals.com',
      },
    ],
  },
}

export default nextConfig
