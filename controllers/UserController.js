const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.getAllUsers((err, data) => {
    if (err) return res.status(500).send('Error fetching users');
    res.status(200).json(data);
  });
};

exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, user) => {
    if (err) return res.status(500).send('Error fetching user');
    if (!user) return res.status(404).send('User not found');
    res.status(200).json(user); 
  });
};

exports.createUser = (req, res) => {
  User.createUser(req.body, (err, newUser) => {
    if (err) return res.status(500).send('Error creating user');
    res.status(201).json(newUser);
  });
};

exports.updateUser = (req, res) => {
  User.updateUser(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send('Error updating user');
    res.status(200).json({ message: 'User updated successfully' });
  });
};

exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, result) => {
    if (err) return res.status(500).send('Error deleting user');
    res.status(200).json({ message: 'User deleted successfully' });
  });
};
