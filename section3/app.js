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
    console.log(request.url, request.method, request.headers);

    response.setHeader('Content-Type', 'text/html');
    response.write('<html lang="kr">');
    response.write('<h1>Hello node.js</h1>')
    response.write('</html>');
    response.end();

    // process.exit();
});

server.listen(3000);