import { type BuildOptions } from './types/config'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { type Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths, isDev } = options
    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : undefined,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
