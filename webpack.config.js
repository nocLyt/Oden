const path = require("path");

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log("env", env);
    return {
        entry: "./src/index.js",
        mode: 'development',
        output: {
            // 必须是绝对路径，输出到那个路径。
            path: path.join(__dirname, "/public/"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, 
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devServer: {
            contentBase: path.join(__dirname, "/public/"),
            historyApiFallback: true
        }
    }
};