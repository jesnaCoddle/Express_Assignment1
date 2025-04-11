const express = require('express');
const router = express.Router();
const verifyToken = require('../controllers/authController');


router.get('/login', verifyToken, (req, res) => {
    res.status(200).send('This is a protected route');
});