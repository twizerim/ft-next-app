import withTM from "next-transpile-modules";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default withTM(["@ant-design/icons"])(nextConfig);
