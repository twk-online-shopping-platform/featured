const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "ts-loader",
          {
            loader: "dts-loader",
            options: {
              name: "featured", // The name configured in ModuleFederationPlugin
              exposes: {
                // The exposes configured in ModuleFederationPlugin
                "./FeaturedProductApp": "./src/FeaturedProductApp",
              },
              typesOutputDir: "types",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
