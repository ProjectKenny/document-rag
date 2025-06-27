/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  generateBuildId: async () => {
    return 'document-rag-build'
  },
};

module.exports = nextConfig;
