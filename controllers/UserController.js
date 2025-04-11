const userModel = require('../models/userModel.js');

const fetchAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

const fetchUserById = async (req, res) => {
    const userId = Number(req.params.id);
    try {
        const user = await userModel.getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: `User with ID ${userId} not found` });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};


const addNewUser = async (req, res) => {
    const { first_name, last_name, email, role, password } = req.body;
    try {
        const newUser = await userModel.createUser({ first_name, last_name, email, role, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};

const modifyUserById = async (req, res) => {
    const userId = Number(req.params.id);
    const { first_name, last_name, email, role } = req.body;
    try {
        const updatedUser = await userModel.updateUser(userId, { first_name, last_name, email, role });
        if (!updatedUser) {
            return res.status(404).json({ error: `User with ID ${userId} not found` });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
};

const removeUserById = async (req, res) => {
    const userId = Number(req.params.id);
    try {
        const success = await userModel.deleteUser(userId);
        if (!success) {
            return res.status(404).json({ error: `User with ID ${userId} not found` });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
};

module.exports = { fetchAllUsers, fetchUserById, addNewUser, modifyUserById, removeUserById };
