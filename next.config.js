/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  module: {
    images: {
      formats: ['image/avif', 'image/webp'],
    },
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = nextConfig;
