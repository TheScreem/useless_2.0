const request = require('supertest');
const app = require('./server');

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

  // Test pour ajouter un produit
  it('should add a new product', async () => {
    const res = await request(app)
      .post('/api/products/')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 10.5,
        stock_quantity: 100,
        image_url: 'http://example.com/test-product.jpg'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Produit ajouté avec succès!');
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

  // Test pour ajouter un client
  it('should add a new customer', async () => {
    const now = new Date();
    const res = await request(app)
      .post('/api/customers/')
      .send({
        first_name: 'Test Nom',
        last_name: 'Test Prenom',
        email: 'Nom@prei.fr' + now.getSeconds() + now.getMilliseconds(),
        address: '65 rue de la soie',
        city: 'Lyon',
        country: 'France',
        phone_number: '05555555'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Client ajouté avec succès!');
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

  // Test pour ajouter un détail de commande
  it('should add a new order detail', async () => {
    const res = await request(app)
      .post('/api/order-details/')
      .send({
        order_id: 17,
        product_id: 19,
        quantity: 3,
        price : 50
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Détail de commande ajouté avec succès!');
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

  // Test pour ajouter une commande
  it('should add a new order', async () => {
    const res = await request(app)
      .post('/api/orders/')
      .send({
        customer_id: 1,
        order_date: '2023-10-13',
        status : 'En cours'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Commande ajoutée avec succès!');
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

  // Test pour effectuer un paiement
  it('should make a new payment', async () => {
    const res = await request(app)
      .post('/api/payments/')
      .send({
        order_id: 17,
        amount: 31.5,
        payment_date: '2023-10-14',
        payment_method: 'Visa'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Paiement effectué avec succès!');
  });
});
