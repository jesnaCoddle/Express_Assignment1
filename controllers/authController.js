const jwt = require('jsonwebtoken');
const db = require('../models/db.js');

const login = async (req, res) => {
    let first_name = req.body.first_name;
    let email = req.body.email;


    if (!first_name || !email) {
        return res.json({ message: 'first_name and email are required' });
    }

    try {
        const [results] = await db.query('SELECT * FROM users WHERE first_name = ?', [first_name]);

        if (results.length === 0) {
            return res.json({ message: 'Invalid first_name' });
        }

        const user = results[0];

        if (user.email !== email) {
            return res.json({ message: 'Invalid email' });
        }

        const token = jwt.sign(
            { id: user.id, first_name: user.first_name, role: user.role },
            'mysecret',
            { expiresIn: '24h' }
        );

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.json({ message: 'Database error' });
    }
};

module.exports = { login };