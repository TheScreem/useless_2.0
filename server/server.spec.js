const request = require('supertest');
const app = require('./server');  // Assurez-vous que cela pointe vers votre fichier server.js

describe('Endpoints', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products/');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single product by id', async () => {
    const res = await request(app).get('/api/product/13');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
  });

  it('should fetch all customers', async () => {
    const res = await request(app).get('/api/customers/');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single customer by id', async () => {
    const res = await request(app).get('/api/customers/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email');
  });

  it('should fetch all order details', async () => {
    const res = await request(app).get('/api/order-details/');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single order detail by id', async () => {
    const res = await request(app).get('/api/order-details/2');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('price');
  });

  it('should fetch all orders', async () => {
    const res = await request(app).get('/api/orders/');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single order by id', async () => {
    const res = await request(app).get('/api/orders/17');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('order_date');
  });

  it('should fetch all payments', async () => {
    const res = await request(app).get('/api/payments/');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a single payment by id', async () => {
    const res = await request(app).get('/api/payments/11');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('amount');
  });
});
