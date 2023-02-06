var http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(req);

    if (req.url.includes('rickandmorty/character')) {

    };
});