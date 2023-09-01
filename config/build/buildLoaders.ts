import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildTsLoader } from './loaders/buildTsLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
    const tsLoaders = buildTsLoader()
    const cssLoader = buildCssLoader(isDev)
    const svgLoader = buildSvgLoader()
    const fileLoader = buildFileLoader()
    const babelLoader = buildBabelLoader()

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoaders,
        cssLoader
    ]
}
