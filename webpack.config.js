const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/index.jsx'),
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    }
};