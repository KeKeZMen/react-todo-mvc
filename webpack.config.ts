import path from "path";
import { Configuration as webpackConfiguration } from "webpack";
import { Configuration as webpackDevServerConfiguration } from "webpack-dev-server";
import ReactRefreshTypescript from "react-refresh-typescript";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface Configuration extends webpackConfiguration {
  devServer?: webpackDevServerConfiguration;
}

export default () => {
  const config: Configuration = {
    mode: "development",

    entry: path.resolve("./src/index.tsx"),

    output: {
      path: path.resolve("public"),
      filename: "[name].[contenthash].js",
      clean: true,
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@": path.resolve("./src"),
      },
    },

    devServer: {
      port: 3001,
      open: true,
      hot: true,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          include: path.resolve("src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypescript()].filter(Boolean),
                }),
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve("./index.html"),
        minify: true,
      }),
    ],
  };

  return config;
};
