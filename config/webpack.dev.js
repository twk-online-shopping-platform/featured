const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const path = require("path");
const TarWebpackPlugin = require("tar-webpack-plugin").default;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "featured",
      filename: "remoteEntry.js",
      exposes: { "./FeaturedProductApp": "./src/bootstrap.tsx" },
    }),
    new TarWebpackPlugin({
      action: "c",
      gzip: true,
      cwd: "./types",
      file: "public/featured-dts.tgz",
      fileList: ["./featured"],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
