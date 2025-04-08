const db = require('../models/db');

const User = {
  getAllUsers: (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  getUserById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  createUser: (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, (err, result) => {
      if (err) return callback(err);
      callback(null, { id: result.insertId, ...userData });
    });
  },

  updateUser: (id, userData, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  deleteUser: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
};

module.exports = User;
