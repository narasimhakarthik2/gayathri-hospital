/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://narasimhakarthik2.github.io/gayathri-hospital' : '',
}

module.exports = nextConfig;