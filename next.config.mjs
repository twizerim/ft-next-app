/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Specify the image formats you want to use
    formats: ["image/avif", "image/webp"],
    // If you are using external image sources, add their domains here
    // Example:
    // domains: ['example.com'],
  },
};

export default nextConfig;
