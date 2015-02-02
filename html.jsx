var React = require('react');

var Html = React.createClass({
  render: function () {
    linkNodes = this.props.css.map(function (cssPath) {
      return <link rel="stylesheet" type="text/css" href={cssPath} />
    })
    scriptNodes = this.props.js.map(function (jsPath) {
      return <script src={jsPath}></script>;
    })

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
          {linkNodes}
          {scriptNodes}
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
      </html>
    );
  }
});

module.exports = Html;