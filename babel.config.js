module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      'libraryName': 'iview',
      'libraryDirectory': 'src/components'
    }]
  ],
  module: {
    rules: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.sass$/,
      loader: ['style', 'css', 'scss']
    }]
  }
}