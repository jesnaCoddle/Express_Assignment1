const db = require('../models/db.js');

const fetchAllUsers = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM users');
        res.send(results);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching users' });
    }
};

const fetchUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching user' });
    }
};

const addNewUser = async (req, res) => {
    let { first_name, last_name, email, role, password } = req.body;

    try {
        const [newUser] = await db.query(
            'INSERT INTO users (first_name, last_name, email, role, password) VALUES (?, ?, ?, ?, ?)',
            [first_name, last_name, email, role, password]
        );
        res.send({ message: 'User created successfully'});
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error creating user' });
    }
};

const updateUserById = async (req, res) => {
    let { first_name, last_name, email, role, password, id } = req.body;

    try {
        const [updatedUser] = await db.query(
            'UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ?, password = ? WHERE id = ?',
            [first_name, last_name, email, role, password, id]
        );
        res.send({ message: 'User updated succesfully'});
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating user' });
    }
};

const removeUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteUser] = await db.query('DELETE FROM users WHERE id = ?', [id]);
        res.send({ message: 'User deleted succesfully'});
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error deleting user' });
    }
};

module.exports = {
    fetchAllUsers,
    fetchUserById,
    addNewUser,
    updateUserById,
    removeUserById
};
