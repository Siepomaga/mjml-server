'use strict';

var http = require('http'),
    querystring = require('querystring'),
    mjml2html = require('mjml');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  req.on("data",function(data){
    var params = querystring.parse(data.toString());
    try {
      var result = mjml2html(params.mjml || '');
      res.write(result.html);
    } catch(ex) {
      res.write('');
    }
  });

  req.on('end', function () {
    res.end();
  });

}).listen(8080);

console.log('Mjml server listening at http://localhost:8080')
