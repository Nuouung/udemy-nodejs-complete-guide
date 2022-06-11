const path = require("path");

module.exports.getError404 = (request, response, next) => {
    response
        .status(404)
        .sendFile(path.join(__dirname, '..', 'views', '404.html'));
}