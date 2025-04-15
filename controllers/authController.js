const jwt = require('jsonwebtoken');
const db = require('../models/db.js');

const login = (req, res) => {
    const { first_name, email } = req.body;

    if (!first_name || !email) {
        return res.status(400).json({ message: 'first_name and email are required' });
    }

      db.query('SELECT * FROM users WHERE first_name = ?', [first_name], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid first_name' });
        }

        const user = results[0];

        console.log('DB email:', user.email, '| Entered email:', email);

        if (user.email !== email) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        const token = jwt.sign(
            { id: user.id, first_name: user.first_name, role: user.role },
             'mysecret',
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    });
};

module.exports = { login };
