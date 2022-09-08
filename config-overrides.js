const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    // config.optimization.minimizer = (config.optimization.minimizer || []).concat([
    //     new ImageMinimizerPlugin({
    //         minimizer: {
    //             implementation: ImageMinimizerPlugin.imageminMinify,
    //             options: {
    //                 plugins: [
    //                     ["mozjpeg", { progressive: true }],
    //                     ["pngquant", { optimizationLevel: 5 }],
    //                 ],
    //             },
    //         },
    //     }),
    // ])
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        }),
        new CompressionPlugin({
            include: /\/assets/,
        })
    ])
    return config;
}