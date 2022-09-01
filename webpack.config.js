const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './public/favicon.ico'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.md$/i,
        use: ["raw-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
}

module.exports = () => {
  // if (isProduction) {
  //   config.mode = "production";
  //   // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  // } else {
  //   config.mode = "development";
  // }
  return config
}