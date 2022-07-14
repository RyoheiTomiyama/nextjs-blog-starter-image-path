/** @type {import('next').NextConfig} */
module.exports = {
  module: 'es5',
  reactStrictMode: true,
  webpack: ( config ) => {
    config.module.rules.push({
      test: /\.(md|markdown)$/,
      type: 'asset/source',
    })

    return config
  },
}
