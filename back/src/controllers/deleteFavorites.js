const favs = require('../utils/favs.js');

const deleteFavorites = (req, res) => {
    favs.length = 0;
    return res.status(200);
};

module.exports = deleteFavorites;