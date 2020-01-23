import TsImport from 'ts-import-plugin'
export default {
    loader:'ts-loader',
    options: {
        getCustomTransformers: () => ({
          before: [ TsImport(
                [
                    // rxjs 按需加载
                    {
                        libraryDirectory: '../_esm5/internal/operators',
                        libraryName: 'rxjs/operators',
                        camel2DashComponentName: false,
                        transformToDefaultImport: false
                    },
                    {
                        libraryDirectory: '../_esm5/internal/observable',
                        libraryName: 'rxjs',
                        camel2DashComponentName: false,
                        transformToDefaultImport: false,
                    },
                    // antd 按需加载
                    {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: 'css',
                    }
                ])
            ]
        }),
    },
}