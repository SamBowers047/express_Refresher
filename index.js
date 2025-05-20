const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'samb',
  host: 'localhost',
  database: 'todo_db',
  password: 'refreshing', 
  port: 5432,
});

// Test the database connection
pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
});

const todoRoutes = require('./todos');
app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = { pool };