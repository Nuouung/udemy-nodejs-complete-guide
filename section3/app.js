// core modules <- [http] [https] [fs] [path] [os] [...]
// http <- Launch a server, send requests
// https <- Launch a SSL server
// ============================================================

const http = require('http');

/*
function requestListener(request, response) {

}

http.createServer(requestListener);
*/

const server = http.createServer((request, response) => {
    console.log(request.url);
});

server.listen(3000);