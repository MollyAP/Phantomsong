/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoName = 'phantomsong';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};
