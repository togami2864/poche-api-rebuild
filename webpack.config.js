/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
// const ForkTsChecker = require("fork-ts-checker-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, "src/server.ts")],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
    publicPath: "/",
    chunkFilename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
      net: require.resolve("net-browserify"),
    },
  },
  plugins: [new NodePolyfillPlugin()],
};
