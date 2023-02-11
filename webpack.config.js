const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "client/dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "client/public/"),
    port: 3000,
    liveReload: true
  }
};