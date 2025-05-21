const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
  user: 'samb',
  host: 'localhost',
  database: 'todo_db',
  password: 'refreshing', 
  port: 5432,
});

module.exports = pool;