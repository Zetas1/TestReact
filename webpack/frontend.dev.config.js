const path = require('path');

module.exports = env => {
	return {
		entry: path.resolve(__dirname, '../app/index.jsx'),
		devtool: 'eval-source-map',
		output: {
			path: path.join(__dirname, '../dist'),
			filename: 'bundle.js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.css']
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
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader'
						}
					]
				},
				{
					test: /\.(png|jpg|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name]-[hash:8].[ext]'
							}
						}
					]
				}
			]
		}
	}
};