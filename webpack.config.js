const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


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
      
      // File loader for supporting images, for example, in CSS files.
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
              outputPath: "images/",
            },
          },
        ]
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
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your HTML template
    }),
  ],
};
