const withTM = require("next-transpile-modules")(["@ant-design/icons"]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yourdomain.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withTM(nextConfig);
