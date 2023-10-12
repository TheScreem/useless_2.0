const request = require('supertest');
const app = require('./server'); // Assurez-vous que cela pointe vers votre fichier server.js

describe('Endpoints', () => {

  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products/');
    expect(res.status).toBe(200);
    // Vous pouvez ajouter d'autres assertions ici, comme vérifier le contenu de la réponse
  });

  // Vous pouvez ajouter d'autres tests pour les autres endpoints de la même manière
});

