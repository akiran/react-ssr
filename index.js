var assign = require('object-assign');
var enhancedRequire = require("enhanced-require");

module.exports = function (webpackConfig) {
  var requireConfig = assign({}, webpackConfig, {
    recursive: true,
  });
  var webpackRequire = require("enhanced-require")(module, requireConfig);
  return webpackRequire('./ssr');
};