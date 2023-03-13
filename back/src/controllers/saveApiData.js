const URL = 'https://rickandmortyapi.com/api/character/?page=';
const axios = require('axios');
const { Character } = require('../DB_connection.js');


const getApiData = async () => {  // Retrieves 100 characters from rickandmortyapi.com
    try {
        let hundredChars = [];
        let bunchOfChars = [];
        let char = {};

        for (let i = 1; i <= 5; i++) {
            let data = await axios(`${URL}${i}`);  // Gets array of 20 chars in data key.
            bunchOfChars = data.data.results;
            
            for (let j = 0; j < bunchOfChars.length; j++) {
                char = {
                    id: bunchOfChars[j].id,
                    name: bunchOfChars[j].name,
                    species: bunchOfChars[j].species,
                    status: bunchOfChars[j].status,
                    origin: bunchOfChars[j].origin.name,
                    gender: bunchOfChars[j].gender,
                    image: bunchOfChars[j].image,
                };
                
                hundredChars.push(char);
            }
        }
        return hundredChars;
    }
    catch (error) {
        return ({ message: error.message });
    }
};

const saveApiData = async () => {
    try {
        const hundredChars = await getApiData();
        await Character.bulkCreate(hundredChars)
            .then(() => console.log("Characters saved in DB"))
            .catch(error => console.log(error));
    }
    catch (error) {
        return { message: error.message };
    }
}

module.exports = saveApiData;