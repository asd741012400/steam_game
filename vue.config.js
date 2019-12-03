const webpack = require('webpack')
module.exports = {
  //...
  // baseUrl: './',
  publicPath:"./",
  pluginOptions:{
    entry:{
      app:["babel-polyfill","./src/main.js"]
    }
  },

    
     
};
