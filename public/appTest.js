import supertest from 'supertest';
import app from './app.js'; 

const request = supertest(app);

describe('Test POST request', () => {
  test('It should handle a POST request and parse the data', async () => {
    const response = await request
      .post('/example-route') 
      .send({
        title: 'test',
        content: 'demo 1',
      });

    expect(response.status).toBe(200);

  });


});
