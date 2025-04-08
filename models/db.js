
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'equipement_rentals',
  port: 3307
});

module.exports = pool.promise();
