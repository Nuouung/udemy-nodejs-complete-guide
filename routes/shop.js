const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send('<h1>Welcome to my shop!</h1>');
})

module.exports = router;