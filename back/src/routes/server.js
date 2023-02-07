var http = require('http');
var fs = require("fs");
var characters = require('../utils/data.js')

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
	
    if (req.url.includes('rickandmorty/character')) {
		// Get id from req.url (req.url will be sth like '/rickandmorty/character/1')
		let id = Number(req.url.split('/').at(-1));

        // Get character from data.js file with id
        let character = characters.filter(char => (char.id === id));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(character[0]));
    }
});

server.listen(PORT, "localhost", () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});