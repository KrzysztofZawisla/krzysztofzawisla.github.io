/* eslint-disable @typescript-eslint/no-var-requires */

import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {
  Configuration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
  optimize,
} from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";

const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const { AggressiveMergingPlugin } = optimize;

const setupConfig = (
  _environment: unknown,
  { mode }: { mode: string },
): Configuration[] => {
  const getConfig = (targetToModern: boolean): Configuration => {
    const entryPoint: string[] = [path.join(__dirname, "src", "index.tsx")];
    const babelTarget: string = targetToModern
      ? "last 2 Chrome versions, last 2 Firefox versions"
      : "> 0.25%, not dead";
    if (!targetToModern) {
      entryPoint.unshift("babel-polyfill");
    }
    return {
      mode: mode === "development" ? mode : "production",
      entry: entryPoint,
      target: "web",
      optimization: {
        minimize: mode !== "development",
        minimizer: [new TerserPlugin()],
        usedExports: true,
      },
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.(js|mjs)$/,
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
                        targets: babelTarget,
                        bugfixes: true,
                        useBuiltIns: "usage",
                        corejs: "3",
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
                    targetToModern &&
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
        path: path.join(
          __dirname,
          "dist",
          "src",
          targetToModern ? "modern" : "legacy",
        ),
        publicPath: `/src/${targetToModern ? "modern" : "legacy"}/`,
        filename: `index.${targetToModern ? "mjs" : "js"}`,
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
      },
      plugins: ([
        new CleanWebpackPlugin(),
        targetToModern &&
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
        targetToModern &&
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: path.join(__dirname, "dist", "index.html"),
            minify: mode !== "development",
            inject: false,
          }),
        targetToModern &&
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "404.html"),
            filename: path.join(__dirname, "dist", "404.html"),
            minify: mode !== "development",
            inject: false,
          }),
        new ESLintPlugin({
          extensions: ["ts", "tsx"],
        }),
        new GenerateSW({
          exclude: [/\.md$/],
          babelPresetEnvTargets: [babelTarget],
          swDest: "./sw.js",
        }),
        new CaseSensitivePathsPlugin(),
        targetToModern &&
          new RobotstxtPlugin({
            filePath: "../../robots.txt",
          }),
        targetToModern &&
          mode === "development" &&
          new HotModuleReplacementPlugin(),
        targetToModern &&
          mode === "development" &&
          new ReactRefreshWebpackPlugin(),
        new AggressiveMergingPlugin(),
      ].filter(Boolean) as unknown) as WebpackPluginInstance[],
      devServer: targetToModern
        ? {
            historyApiFallback: true,
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            hot: true,
            writeToDisk: true,
          }
        : undefined,
    };
  };
  return [getConfig(true), getConfig(false)];
};

export default setupConfig;
