export default {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
              },
            ],
            '@babel/preset-typescript'
          ],
          plugins: ['@babel/plugin-transform-runtime']
    }
}