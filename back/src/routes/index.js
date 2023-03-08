const express = require('express')
const characterRouter = express.Router()

// Controllers
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
const deleteFavorite = require('../controllers/deleteFavorite.js');
const deleteFavorites = require('../controllers/deleteFavorites.js');
const getFavorites = require('../controllers/getFavorites.js');
const postFavorite = require('../controllers/postFavorite.js');

characterRouter.get('/onsearch/:id', getCharById);
characterRouter.get('/detail/:id', getCharDetail);

characterRouter.post('/fav', postFavorite);
characterRouter.get('/fav', getFavorites);
characterRouter.delete('/fav', deleteFavorites);
characterRouter.delete('/fav/:id', deleteFavorite);


module.exports = characterRouter;