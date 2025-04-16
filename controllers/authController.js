const jwt = require('jsonwebtoken');
const db = require('../models/db.js');

const login = (req, res) => {
    const { first_name, email } = req.body;

    if (!first_name || !email) {
        return res.json({ message: 'first_name and email are required' });
    }

    db.query('SELECT * FROM users WHERE first_name = ?', [first_name], (err, results) => {
        if (err) return res.json({ message: 'Database error' });

        if (results.length === 0) {
            return res.json({ message: 'Invalid first_name' });
        }

        const user = results[0];

        console.log('DB returned user:', user);
        console.log('DB email:', user.email, '| Entered email:', email);

        if (user.email !== email) {
            return res.json({ message: 'Invalid email' });
        }

        const token = jwt.sign(
            { id: user.id, first_name: user.first_name, role: user.role },
            'mysecret',
            { expiresIn: '24h' }
        );
        console.log(token);

        res.json({ token });
    });
};

module.exports = { login };
