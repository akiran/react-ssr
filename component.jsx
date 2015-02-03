var React = require('react');
var Html = require('./html');

var ssrComponent = function (targetPath, props) {
  return function (req, res, next) {
    var Component = require(targetPath);
    var markup = React.renderToString(<Component />);
    var html   = React.renderToStaticMarkup(<Html {...props} markup={markup} />);
    res.status(200).send('<!DOCTYPE html>' + html);
  };
};

module.exports = ssrComponent;