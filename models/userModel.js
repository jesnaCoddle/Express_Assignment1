const db = require('../models/db');

const User = {
    getAllUsers: (callback) => {
        db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                return callback(err);
            }
            console.log(results);
            callback(results);
        });
    }
};

module.exports = User;
