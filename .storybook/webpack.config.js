const loaders = require('web-chunks/dist/loaders')
const { babelLoader } = loaders

module.exports = ({ config, mode }) => {
    config.module.rules.push(babelLoader())
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}
