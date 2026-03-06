import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname:
          'grilv9at0nnk.compat.objectstorage.sa-saopaulo-1.oraclecloud.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
