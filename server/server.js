const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const PORT = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'useless_db',
  password: 'useless2024',
  port: 5432
});

// Utilisez le middleware cors pour toutes les routes
app.use(cors({
  origin: 'http://localhost:4200'  // Permet seulement à cette origine d'accéder à l'API
}));

app.get('/api/products/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).json({ message: 'Produit non trouvé' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get('/api/product/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const result = await pool.query('SELECT name, description, price, stock, imageUrl FROM product WHERE id = $1', [productId]);
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

async function testDatabaseConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    if (result && result.rows) {
      console.log('Connecté à la base de données à', result.rows[0].now);
    }
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1); // Arrête le serveur en cas d'erreur de connexion
  }
}

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
  testDatabaseConnection();
});
