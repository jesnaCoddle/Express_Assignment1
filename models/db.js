// db.js
const mysql = require('mysql2/promise');

const con = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'equipement_rentals',
  port: 3307
});

async function testConnection() {
  try {
    const connection = await con.getConnection();
    console.log('Connected to the MySQL database.');
    connection.release(); 
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

testConnection();

module.exports = con;
