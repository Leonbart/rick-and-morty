const favs = require('../utils/favs.js');

const getFavorites = (req, res) => {
    res.status(200).json(favs);
};

module.exports = getFavorites;