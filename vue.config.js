module.exports = {
    productionSourceMap: false,
    css: {
        sourceMap: false,
        loaderOptions: {
            less: {
                lessOptions: { javascriptEnabled: true }
            }
        }
    },
    devServer: {
        // proxy: {
        //     "/": {
        //         target: 'http://res.xh.com/',
        //         changeOrigin: true,
        //         ws: false,
        //         secure: false,
        //         pathRewrite: {
        //             '^/': '/tp/public/index.php/'
        //         },
        //     },

        // }
    },
}