var assign = require('object-assign');
var enhancedRequire = require("enhanced-require");

module.exports = function (webpackConfig) {
  var requireConfig = assign({}, webpackConfig, {
    recursive: true,
  });
  var webpackRequire = enhancedRequire(module, requireConfig);
  var ssr = webpackRequire('./ssr');
  return ssr;
};