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
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-transform-runtime']
    }
}