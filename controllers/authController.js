const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./db.js');
const verifyToken = require('../middleware/verifyToken.js');

const router = express.Router();

router.post('/login', (req, res) => {
    const { first_name, password } = req.body;

    if (!first_name || !password) {
        return res.status(400).json({ message: 'first_name and password are required' });
    }

    const query = `SELECT first_name, password FROM users WHERE first_name = ? AND password=SHA1(?)`;

    db.query(query, [first_name], (err, result) => {
        if (err || result.length === 0) {
            return res.status(401).send({ error: "Login failed" });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'firstname is invalid' });
        }

        const user = {
            id: result[0].id,
            first_name: user.first_name
        };

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

        res.status(200).send({ auth: true, token });
    });
});

router.post('/validate-token', verifyToken, (req, res) => {
    const user = req.user;

    res.json({
        message: 'Token is valid',
        user: {
            first_name: user.first_name,

        },
    });
});

export default router;