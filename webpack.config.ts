/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-var-requires */
///<reference path="webpack.d.ts" />

import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {
  Configuration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
  optimize,
  DefinePlugin,
} from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { constants } from "zlib";
import RobotstxtPlugin from "robotstxt-webpack-plugin";
import SitemapPlugin from "sitemap-webpack-plugin";
import InterpolateHtmlPlugin from "interpolate-html-plugin";
import CompressionPlugin from "compression-webpack-plugin";

const { AggressiveMergingPlugin } = optimize;

const getEntryPoint = (targetToModern: boolean): string[] => {
  const entryPoint: string[] = [path.join(__dirname, "src", "index.tsx")];
  if (!targetToModern) {
    entryPoint.unshift("babel-polyfill");
  }
  return entryPoint;
};

const setupConfig = (
  _environment: unknown,
  { mode }: { mode: string },
): Configuration[] => {
  const getConfig = (targetToModern: boolean): Configuration => {
    const entryPoint = getEntryPoint(targetToModern);
    const babelTarget: string = targetToModern
      ? "last 2 Chrome versions, last 2 Firefox versions"
      : "> 0.25%, not dead";
    return {
      mode: mode === "development" ? mode : "production",
      entry: entryPoint,
      target: "web",
      optimization: {
        minimize: mode !== "development",
        minimizer: [(new TerserPlugin() as unknown) as WebpackPluginInstance],
        usedExports: true,
      },
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: "url-loader",
              },
            ],
          },
          {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
          },
          {
            test: /\.(js|mjs)$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
          {
            test: /\.(ts|tsx)$/,
            include: path.join(__dirname, "src"),
            exclude: [/(node_modules|bower_components)/, /\.test\.(ts|tsx)$/],
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
                    [
                      "styled-components",
                      { ssr: false, displayName: mode === "development" },
                    ],
                    "@babel/plugin-syntax-top-level-await",
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
        module: targetToModern,
        chunkFilename: `[id].${targetToModern ? "mjs" : "js"}`,
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
      },
      experiments: {
        topLevelAwait: true,
        outputModule: targetToModern,
      },
      plugins: ([
        targetToModern &&
          new InterpolateHtmlPlugin({
            PUBLIC_URL: "./static",
            MODERN_SCRIPT: "./src/modern/index.mjs",
            LEGACY_SCRIPT: "./src/legacy/index.js",
          }),
        new DefinePlugin({
          "process.env.DEVELOPMENT": JSON.stringify(mode === "development"),
        }),
        new CompressionPlugin({
          filename: "[path][base].gz",
          test: /\.(js|mjs|css|html|svg)$/,
          deleteOriginalAssets: false,
        }),
        targetToModern &&
          new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|mjs|css|html|svg)$/,
            compressionOptions: {
              params: {
                [constants.BROTLI_PARAM_QUALITY]: 11,
              },
            },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
        new CleanWebpackPlugin(),
        mode !== "development" &&
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static",
            reportFilename: `../../../${
              targetToModern ? "modern" : "legacy"
            }-analyzer-report.html`,
          }),
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
        mode !== "development" &&
          targetToModern &&
          new SitemapPlugin({
            base: "https://krzysztofzawisla.github.io/",
            paths: ["/", "/skills", "/projects", "/experience", "/contact"],
            options: {
              filename: "../../map.xml",
            },
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
        mode !== "development" &&
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
  const config: Configuration[] = [getConfig(true)];
  if (mode !== "development") {
    config.push(getConfig(false));
  }
  return config;
};

export default setupConfig;
