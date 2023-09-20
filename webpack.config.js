const path = require("path");

module.exports = {
  entry: "./src/main.ts", // Update with your entry file path
  output: {
    filename: "bundle.js", // Name of the output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Match TypeScript files
        use: "ts-loader", // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Specify the content base directory
    },
  },
};
