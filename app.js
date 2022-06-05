const http = require('http');

const { handler, someText } = require('./routes');

console.log(someText);

http.createServer(handler).listen(3000);