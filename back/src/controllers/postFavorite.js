const favs = require('../utils/favs.js');

const postFavorite = (req, res) => {
    const char = req.body;
    favs.push(char);

    res.json('Character added to favs.');
};

module.exports = postFavorite;