/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
