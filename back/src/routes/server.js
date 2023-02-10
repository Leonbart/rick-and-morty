var http = require('http');
var fs = require("fs");
var characters = require('../utils/data.js');
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    let id = Number(req.url.split('/').at(-1));
	
    if (req.url.includes('onsearch')) {
        getCharById(res, id)
    }
	
    if (req.url.includes('detail')) {
        getCharDetail(res, id)
    }

});

server.listen(PORT, "localhost", () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});