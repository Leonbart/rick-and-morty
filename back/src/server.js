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