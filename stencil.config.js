const sass = require('@stencil/sass');

exports.config = {
  namespace: 'myuw-app-bar',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
