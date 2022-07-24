/** @type {import('next').NextConfig} */

const path = require('path');
const pkg = require('./package.json');
const { i18n } = require('./next-i18next.config');

const applicationMetaData = {
  name: pkg.name,
  description: pkg.description,
  version: pkg.version,
  commit: pkg.commit,
};

const nextConfig = {
  publicRuntimeConfig: { ...applicationMetaData },
  env: {},
  i18n,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: '/health',
        destination: '/api/health',
        permanent: true,
      },
    ];
  },
  webpack: config => {
    config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          app: __dirname,
        },
      },
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgo: false },
        },
      ],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
