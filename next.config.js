/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  /**
   * Tell Next.js where the `public` folder is.
   * Replace `prints-next` with your Github repo project name.
   */
  assetPrefix: isProd ? "/prints-next/" : "",

  /**
   * Disable server-based image optimization.
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
   images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
