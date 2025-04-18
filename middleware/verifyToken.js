const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'mysecret', (err, decoded) => {
        if (err) return res.json({ message: 'Invalid token' });
        // req.user = decoded;
        next();
    });
}

module.exports = verifyToken;
