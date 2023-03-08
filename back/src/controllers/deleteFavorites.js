const favs = require('../utils/favs.js');

const deleteFavorites = (req, res) => {
    favs.length = 0;
    return res.sendStatus(200);
};

module.exports = deleteFavorites;