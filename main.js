//Adding Promises

const express = require('express');
const mysql = require('mysql2/promise'); 
const app = express();
const PORT = 3100;


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '', 
    database: 'equipement_rentals',
    port: 3307, 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.get('/fetch', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.json(rows); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Failed to fetch data from database.');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







