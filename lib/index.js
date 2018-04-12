#!/usr/bin/env node

'use strict';

var http = require('http'),
    querystring = require('querystring'),
    mjml2html = require('mjml'),
    program = require('commander');

program.version('1.0.4')
       .usage('[options]')
       .option('-p, --port <n>', 'port of server', 1410)
       .option('--hostname [value]', 'port of server', '127.0.0.1')
       .parse(process.argv)

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

}).listen(program.port, program.hostname);

console.log('Mjml server listening at http://' + program.hostname + ':' + program.port)
