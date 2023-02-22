const URL = 'https://rickandmortyapi.com/api/character/';

const axios = require('axios');

const getCharDetail = async (req, res) => {
    const params = req.params;

    try {
        const { data } = await axios(`${URL}${params.id}`)
        let character = {
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
            origin: data.origin,
            status: data.status,
            location: data.location,
        }
        res
            .status(200)
            .json(character)
    }
    catch (err) {
        res
            .status(500)
            .json({ message: err.message })
    }
}

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 origin: data.origin,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 status: data.status,
//             }
//             res.writeHead(200, { 'Content-Type': 'application/json' })
//                 .end(JSON.stringify(character))
//         })
//         .catch(err =>
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//                 .end(`Character with ${id} ID not found`)
//         )
// }


module.exports = getCharDetail;