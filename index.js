var http = require('http')
var express = require('express')
var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
  if(err) return console.error(err);
  console.log(data.toString())
})

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World')
}).listen(3081);

console.log('Server is running on localhost:3081')
