const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html lang="kr">');
        response.write('<head><title>새로운 메세지를 입력하세요</title></head>')
        response.write('<body><form action="/message" method="post"><input type="text"><button type="submit">전송</button></form></body>')
        response.write('</html>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<body><h1>Hello node.js!</h1></body>');
    response.end();
})
    .listen(3000);