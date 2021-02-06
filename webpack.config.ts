/* eslint-disable @typescript-eslint/no-var-requires */

import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {
  Configuration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
} from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";

const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const setupConfig = (
  _environment: unknown,
  { mode }: { mode: string },
): Configuration => {
  return {
    mode: mode === "development" ? mode : "production",
    entry: ["babel-polyfill", path.join(__dirname, "src", "index.tsx")],
    target: "web",
    optimization: {
      minimize: mode !== "development",
      minimizer: [new TerserPlugin()],
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|tff)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          include: path.join(__dirname, "src"),
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      targets: "> 0.25%, not dead",
                    },
                  ],
                  "@babel/preset-typescript",
                  [
                    "@babel/preset-react",
                    {
                      runtime: "automatic",
                    },
                  ],
                ],
                plugins: [
                  "lodash",
                  mode === "development" &&
                    require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
            },
          ],
        },
      ],
    },
    output: {
      path: path.join(__dirname, "dist", "src"),
      filename: "index.js",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
    },
    plugins: ([
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "public"),
            to: path.join(__dirname, "dist", "static"),
            noErrorOnMissing: true,
            globOptions: {
              ignore: ["**/404.html", "**/index.html", "**/404.md"],
            },
          },
          {
            from: path.join(__dirname, "public", "404.md"),
            to: path.join(__dirname, "dist"),
          },
        ],
        options: {
          concurrency: 100,
        },
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: path.join(__dirname, "dist", "index.html"),
        minify: mode !== "development",
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "404.html"),
        filename: path.join(__dirname, "dist", "404.html"),
        minify: mode !== "development",
        inject: false,
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: "async",
      }),
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
      }),
      new GenerateSW({
        swDest: "./sw.js",
      }),
      new CaseSensitivePathsPlugin(),
      new RobotstxtPlugin({
        filePath: "./robots.txt",
      }),
      mode === "development" && new HotModuleReplacementPlugin(),
      mode === "development" && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean) as unknown) as WebpackPluginInstance[],
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      hot: true,
      writeToDisk: true,
    },
  };
};

export default setupConfig;
