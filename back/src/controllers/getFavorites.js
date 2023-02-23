const favs = require('../utils/favs.js');

const getFavorites = (req, res) => {
    return res.status(200).send(favs);
};

module.exports = getFavorites;