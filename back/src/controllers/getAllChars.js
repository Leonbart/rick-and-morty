const { Character } = require('../DB_connection.js');

const getAllChars = async (req, res) => {
    try {
        const allChars = await Character.findAll();
        return res.status(200).json(allChars);
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = getAllChars;