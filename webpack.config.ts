import path from 'path';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServer: DevServerConfiguration = {
  historyApiFallback: true,
};

const mode = (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development';

const config: Configuration = {
  mode,
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[id].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    asyncChunks: true,
    chunkFilename: '[id].js',
    cssHeadDataCompression: mode === 'production',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: mode === 'production',
      inject: true,
      template: './public/index.html',
    }),
  ],
  devServer,
};

export default config;
