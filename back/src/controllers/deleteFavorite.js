const favs = require('../utils/favs.js');

const deleteFavorites = (req, res) => {
    const params = req.params;

    // Find index in favs of char with id received
    const charIndex = favs.findIndex(char => char.id == params.id);

    // If character with id doesn't exist return error, else delete it and return success

    if (charIndex < 0) res.status(400).json({ error: `The character with id ${req.params.id} is not in favorites.` })
    else {
        favs.splice(charIndex, 1);
        res.json({ success: true });
    }
};

module.exports = deleteFavorites;