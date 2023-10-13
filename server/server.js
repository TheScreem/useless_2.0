const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 3001;
app.use(express.json());
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'useless_db',
  password: 'useless2024',
  port: 5432
});

// Utilisez le middleware cors pour toutes les routes
app.use(cors({
  origin: 'http://localhost:4200'
}));

async function testDatabaseConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    if (result && result.rows) {
      console.log('Connecté à la base de données à', result.rows[0].now);
    }
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1);
  }
}

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
  testDatabaseConnection();
});

// Produits
app.get('/api/products/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/api/product/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await pool.query('SELECT name, description, price, stock_quantity, image_url FROM products WHERE product_id = $1', [productId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Produit non trouvé' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/products/', async (req, res) => {
  const { name, description, price, stock_quantity, image_url } = req.body;
  try {
    const result = await pool.query('INSERT INTO products(name, description, price, stock_quantity, image_url) VALUES($1, $2, $3, $4, $5) RETURNING product_id', [name, description, price, stock_quantity, image_url]);
    res.json({ id: result.rows[0].product_id, message: 'Produit ajouté avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


// Clients
app.get('/api/customers/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/api/customers/:id', async (req, res) => {
  const customerId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1', [customerId]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/customers/', async (req, res) => {
  // Adaptez ceci selon les colonnes de votre table customers
  const { first_name, last_name, email, address, city, country, phone_number } = req.body;
  try {
    const result = await pool.query('INSERT INTO customers(first_name, last_name, email, address, city, country, phone_number) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING customer_id', [first_name, last_name, email, address, city, country, phone_number]);
    res.json({ id: result.rows[0].customer_id, message: 'Client ajouté avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


// Détails des commandes
app.get('/api/order-details/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM order_details');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/api/order-details/:id', async (req, res) => {
  const orderDetailsId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM order_details WHERE order_detail_id = $1', [orderDetailsId]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/order-details/', async (req, res) => {
  // Adaptez ceci selon les colonnes de votre table order_details
  const { order_id, product_id, quantity, price } = req.body;
  try {
    const result = await pool.query('INSERT INTO order_details(order_id, product_id, quantity, price) VALUES($1, $2, $3, $4) RETURNING order_detail_id', [order_id, product_id, quantity, price]);
    res.json({ id: result.rows[0].order_detail_id, message: 'Détail de commande ajouté avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Commandes
app.get('/api/orders/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/orders/', async (req, res) => {
  // Adaptez ceci selon les colonnes de votre table orders
  const { customer_id, order_date, status } = req.body;
  try {
    const result = await pool.query('INSERT INTO orders(customer_id, order_date, status) VALUES($1, $2, $3) RETURNING order_id', [customer_id, order_date, status]);
    res.json({ id: result.rows[0].order_id, message: 'Commande ajoutée avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


app.get('/api/orders/:id', async (req, res) => {
  const orderId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM orders WHERE order_id = $1', [orderId]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/orders/', async (req, res) => {
  // Adaptez ceci selon les colonnes de votre table orders
  const { customer_id, order_date, status } = req.body;
  try {
    const result = await pool.query('INSERT INTO orders(customer_id, order_date, status) VALUES($1, $2, $3) RETURNING order_id', [customer_id, order_date, status]);
    res.json({ id: result.rows[0].order_id, message: 'Commande ajoutée avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


// Paiements
app.get('/api/payments/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM payments');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/api/payments/:id', async (req, res) => {
  const paymentId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM payments WHERE payment_id = $1', [paymentId]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/api/payments/', async (req, res) => {
  // Adaptez ceci selon les colonnes de votre table payments
  const { order_id, amount, payment_date, payment_method } = req.body;
  try {
    const result = await pool.query('INSERT INTO payments(order_id, amount, payment_date, payment_method) VALUES($1, $2, $3, $4) RETURNING payment_id', [order_id, amount, payment_date, payment_method]);
    res.json({ id: result.rows[0].payment_id, message: 'Paiement effectué avec succès!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = app;
