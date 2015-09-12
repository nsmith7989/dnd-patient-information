var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        truckFilter: [
            'webpack-hot-middleware/client?reload=true',
            './src/index.js'
        ]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    // Require the webpack and react-hot-loader plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: true
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        // Load the react-hot-loader
        loaders: [ {
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        } ]
    },

};