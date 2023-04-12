const { Pool } = require('pg');

const pool = new Pool({
  host: '34.251.191.7',
  port: 5432,
  user: 'postgres',
  password: 'gladys',
  database: 'postgres',
});

async function connect() {
  try {
    await pool.connect();
    console.log('Connected to the PostgreSQL database');
  } catch (err) {
    console.error('Error connecting to the PostgreSQL database:', err);
  }
}

async function insertData(name, email, message) {
  try {
    const query = 'INSERT INTO mytable (name, email, message) VALUES ($1, $2, $3)';
    const values = [name, email, message];
    await pool.query(query, values);
    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err);
  }
}

module.exports = { connect, insertData };