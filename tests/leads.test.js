
const request = require('supertest');
const app = require('../src/index');

describe('leads API', () => {
  it('should create lead', async () => {
    const res = await request(app).post('/api/v1/leads').send({ name: 'Rick', email: 'r@x.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.created).toBe(true);
  });
});