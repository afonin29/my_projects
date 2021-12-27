const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './objects.ts'),
    },
    module :{
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve : {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};