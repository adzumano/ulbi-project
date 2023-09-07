import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin, DefinePlugin, type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const { paths, isDev, analyze, apiUrl, project } = options
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
            _API_: JSON.stringify(apiUrl),
            _PROJECT_: JSON.stringify(project)
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (analyze) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        )
    }

    return plugins
}
