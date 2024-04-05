const path = require("path");
const config = {

    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    resolve: { extensions: [".mjs", ".js", ".jsx", ".css"] },

    module: {
        rules: [
            {
                test: /\.js|jsx|.css$/,
                use: [  "style-loader", "css-loader", "babel-loader"],
                exclude: /node_modules/,
                // loader: "style-loader!css-loader"
            },

        ]
    },

}

module.exports = config;