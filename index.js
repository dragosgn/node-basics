var http = require('http')
var express = require('express')
var fs = require('fs')

var data = fs.readFileSync('input.txt')
console.log(data.toString())


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World')
}).listen(3081);

console.log('Server is running on localhost:3081')
