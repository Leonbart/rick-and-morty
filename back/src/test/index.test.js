const app = require('../server.js');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET rickandmorty/{id}', () => {
        it('Responde con status: 200', () => {
            return agent.get('/rickandmorty/onsearch/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
            return agent
                .get('/rickandmorty/onsearch/1')
                .expect(200)
                .then((response) => {
                    const expectedKeys = ['id', 'name', 'species', 'gender', 'image'];
                    const actualKeys = Object.keys(response.body);
                    expectedKeys.forEach((key) => {
                        expect(actualKeys).toContain(key);
                    });
                });
        });

        it('Si hay un error responde con status: 500', () => {
            return agent.get('/rickandmorty/onsearch/1500').expect(500);
        })
    })

    describe('GET rickandmorty/detail/{id}', () => {
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', () => {
            return agent.get('/rickandmorty/detail/1').then((response) => {
                expect(response.body).toEqual({
                    status: "Alive",
                    name: "Rick Sanchez",
                    species: "Human",
                    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                    gender: "Male",
                    origin: {
                        name: "Earth (C-137)",
                        url: "https://rickandmortyapi.com/api/location/1",
                    },
                    location: {
                        name: "Citadel of Ricks",
                        url: "https://rickandmortyapi.com/api/location/3"
                    }
                })
            });
        });
    })

    // routes to test:

    // characterRouter.delete('/fav', deleteFavorites);

    // --- Using async/await ------------------------------------------------------------------
    describe('POST /fav', () => {
        it('Postea un favorito retornando status 200 y el character posteado', async () => {
            let charToPost = {
                name: "Rick Sanchez",
                gender: "Male",
                status: "Alive",
                species: "Human",
            }
            const res = await agent.post('/rickandmorty/fav')
                .send(charToPost);
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(charToPost);

        })

    })

    describe('GET /fav', () => {
        it('Devuelve status 200 y un array', async () => {
            const res = await agent.get('/rickandmorty/fav');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        })
    })

    // --- Using async/await and resolve

    describe('DELETE /fav/:id', () => {
        const id_to_fail = 10000; // id del favorite a borrar (fail)
        const id_to_succeed = 1; // id del favorite a borrar (success)

        it(`Si el id ${id_to_fail} no está en favoritos, devuelve status 400.`, async () => {
            expect.assertions(1);
            await expect(agent.delete(`/rickandmorty/fav/${id_to_fail}`))
                .resolves.toHaveProperty('status', 400);
        });

        it(`Si el id ${id_to_fail} no está en favoritos, devuelve el warning: The character with id ${id_to_fail} is not in favorites.`, async () => {
            expect.assertions(1);
            await expect(agent.delete(`/rickandmorty/fav/${id_to_fail}`))
                .resolves.toHaveProperty('text', `{"warning":"The character with id ${id_to_fail} is not in favorites."}`);
        })

        // Add a character to favs array and check successful delete
        const favs = require('../utils/favs.js');
        favs.push({
            id: 1,
            name: "Rick Sanchez",
            gender: "Male",
            status: "Alive",
            species: "Human",
        });

        it(`Si el id ${id_to_succeed} está en favoritos, devuelve success: true.`, async () => {
            expect.assertions(1);
            await expect(agent.delete(`/rickandmorty/fav/${id_to_succeed}`))
                .resolves.toHaveProperty('text', `{"success":true}`);
        })
    })

    describe('DELETE /fav', () => {
        // Add 2 characters to favs array and check successful delete
        const favs = require('../utils/favs.js');
        favs.push({
            id: 1,
            name: "Rick Sanchez",
            gender: "Male",
            status: "Alive",
            species: "Human",
        },
            {
                id: 2,
                name: "John Doe",
                gender: "Male",
                status: "Alive",
                species: "Human",
            });

        // not using resolve (to check status code)
        it('Borra todos los favoritos del array favs, devuelve status 200.', async () => {
            expect.assertions(2);
            const res = await agent.delete('/rickandmorty/fav');
            expect(favs).toEqual([]);
            expect(res.statusCode).toBe(200);
        })

    })
});