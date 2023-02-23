const favs = require('../utils/favs.js');

const deleteFavorite = (req, res) => {
    const params = req.params;

    // Find index in favs of char with id received
    const charIndex = favs.findIndex(char => char.id == params.id);

    // If character with id doesn't exist return warning, else delete it and return success

    if (charIndex < 0) res.status(400).json({ warning: `The character with id ${req.params.id} is not in favorites.` })
    else {
        favs.splice(charIndex, 1);
        res.json({ success: true });
    }
};

module.exports = deleteFavorite;