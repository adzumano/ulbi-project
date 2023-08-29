import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin, DefinePlugin, WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const buildPlugins = ({paths, isDev}: BuildOptions): WebpackPluginInstance[] => {
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
            _IS_DEV_: isDev
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins;
}