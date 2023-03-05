const express = require('express');
const server = express();
const cors = require('cors');
// const PORT = 3001;
const characterRouter = require('./routes/index.js');

var corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

server.use(cors(corsOptions));
server.use(express.json());
server.use('/rickandmorty/', characterRouter);



// server.listen(PORT, () => {
//    console.log('Server raised in port ' + PORT);
// });

module.exports = server; 



// var http = require('http');
// var fs = require("fs");
// var characters = require('../utils/data.js');
// const getCharById = require('../controllers/getCharById.js');
// const getCharDetail = require('../controllers/getCharDetail.js');

// const PORT = 3001;

// const server = http.createServer((req, res) => {
//     console.log(`Server raised in port ${PORT}`);
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     let id = Number(req.url.split('/').at(-1));
	
//     if (req.url.includes('onsearch')) {
//         getCharById(res, id)
//     }
	
//     if (req.url.includes('detail')) {
//         getCharDetail(res, id)
//     }

// });

// server.listen(PORT, "localhost", () => {
//     console.log(`Server listening on http://localhost:${PORT}`);
// });