const path = require('path');
const webpack = require ('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPlugins = () => {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
    ];
};
const generateFileName = (extension, isDev) => {
    return isDev
        ? `[name].[hash].${extension}`
        : `[name].${extension}`;
};

module.exports = (env) => {

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    return {
        mode,
        entry: './src/index.jsx', // Входной файл
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: generateFileName('js', isDev),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
            ],
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: getPlugins(),
        devtool: isDev ? 'inline-source-map' : undefined,
        // devServer: isDev ? buildDevServer(options) : undefined,
        devServer: {
            open: true,
            port: PORT,
        },
    };
};