import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin();
const nextConfig = withNextIntl({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    return config;
  },
  
});

export default nextConfig;
