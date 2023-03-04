const app = require('../../app.js');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe('GET rickandmorty/{id}', () => {
        it('Responde con status: 200', () => {
            agent.get('/rickandmorty/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', () => {
            return expect(agent.get('/rickandmorty/1')).resolves.toContain("id", "name", "species", "gender", "image")
        });
    })
});