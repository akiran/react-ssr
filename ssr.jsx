var React = require('react');
var Router = require('react-router');
var Html = require('./html');

var ssr = function (routesPath, props) {
  var routes = require(routesPath);
  return function (req, res, next) {
    Router.run(routes, req.url, function (Handler, state) {
      var markup = React.renderToString(<Handler />);
      var html   = React.renderToStaticMarkup(<Html {...props} markup={markup} />);
      res.status(200).send('<!DOCTYPE html>' + html);
    });
  }.bind(this);
};

module.exports = ssr;