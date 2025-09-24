/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'my.messagemind.ai',
        pathname: '/group-top.png', // you can also use '/**' to allow all images
      },
      {
        protocol: "https",
        hostname: "my.messagemind.ai",
        pathname: "/group-bottom.png",
      }
    ],
  },
};

export default nextConfig;

