const express = require('express');
const app = express();
const pool = require('./db');
const port = 3000;

// Middleware to parse JSON
app.use(express.json());



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

app.use('/api', todoRoutes);

module.exports = { pool };