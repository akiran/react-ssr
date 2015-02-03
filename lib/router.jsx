var React = require('react');
var Router = require('react-router');
var Html = require('./html');

var ssrRouter = function (targetPath, props) {
  return function (req, res, next) {
    var routes = require(targetPath);
    Router.run(routes, req.url, function (Handler, state) {
      var markup = React.renderToString(<Handler />);
      var html   = React.renderToStaticMarkup(<Html {...props} markup={markup} />);
      res.status(200).send('<!DOCTYPE html>' + html);
    });
  }.bind(this);
};

module.exports = ssrRouter;