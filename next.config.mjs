/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shiki', '@blocknote'],
  images: {
    domains: ['haedal-image-storage.s3.ap-northeast-2.amazonaws.com'],
  },
}

export default nextConfig
