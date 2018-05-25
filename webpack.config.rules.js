module.exports = function() {
    return [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader?name=images/[hash].[ext]'
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[hash].[ext]'
        }
    ];
};
