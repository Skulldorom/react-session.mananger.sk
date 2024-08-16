const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "MyComponent",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    react: "react", // Use 'react' from the environment (do not bundle)
    "react-dom": "react-dom", // Use 'react-dom' from the environment (do not bundle)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: {
          loader: "css-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
