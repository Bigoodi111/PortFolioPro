/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // peut être retiré si warning
  images: {
    domains: [], // ajoute ici les domaines autorisés si nécessaire
  },
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
