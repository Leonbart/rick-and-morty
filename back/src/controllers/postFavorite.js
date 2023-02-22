const favs = require('../utils/favs.js');

const postFavorite = (req, res) => {
    const char = req.body;
    favs.push(char);

    res.status(200).json(char);
};

module.exports = postFavorite;