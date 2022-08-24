const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require("path");

module.exports = {
  webpackFinal: async (config) => {
    // add typescript configs
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    // add sass 
    config.module.rules.push({
      test: /\.scss$/,
      use: [{
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [
            path.resolve(__dirname, '../src/index.scss')
          ]
        }
      }],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
