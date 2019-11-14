const config = require('web-chunks')

module.exports = config({
    resolve: {
        alias: { 'react-dom': '@hot-loader/react-dom' }
    }
})
