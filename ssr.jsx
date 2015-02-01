var React = require('react');
var Router = require('react-router');

var isomorphic = function (routesPath, options) {
  var routes = require(routesPath);
  return function (req, res, next) {
    Router.run(routes, req.url, function (Handler, state) {
      var html = React.renderToString(React.createElement(Handler));
      res.status(200).send(html);
    });
  }.bind(this);
};

module.exports = isomorphic;