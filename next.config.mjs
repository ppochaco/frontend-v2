/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shiki', '@blocknote'],
  images: {
    domains: ['www.knu-haedal.com'],
  },
}

export default nextConfig
