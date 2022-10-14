var path = require('path');
module.exports = {
    entry: './src/index.tsx',
     output:{
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },

      externals: {
        "react": "React",
        "react-dom": "ReactDOM",
      },
};