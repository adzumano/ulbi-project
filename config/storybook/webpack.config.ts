import path from 'path'
import { type Configuration } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    const fileLoaderRule: any = config.module?.rules?.find((rule: any) => rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module?.rules?.push(buildSvgLoader(), buildCssLoader(true))

    return config
}
