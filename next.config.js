/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
  }),
  // Base path for GitHub Pages deployment
  ...(process.env.NODE_ENV === 'production' && {
    basePath: process.env.NODE_ENV === 'production' ? '/gayathri-hospital' : '',
  }),
}

module.exports = nextConfig;