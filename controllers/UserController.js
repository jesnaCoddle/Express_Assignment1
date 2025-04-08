
const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.getAllUsers((err, data) => {
    if (err) {
        console.log(err);
      return res.status(500).send('Error cant get users');
    }
    res.status(200).json(data);
  });
};


