const userModel = require('../models/userModel');

const getUsers = async (req, res, next) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(Number(id));
        if (!user) {
            return res.status(404).json({ error: `User with ID ${id} not found` });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
};

const createUser = async (req, res, next) => {
    const { first_name, last_name, email, role } = req.body;
    try {
        const newUser = await userModel.createUser({ first_name, last_name, email, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, last_name, email, role } = req.body;
    try {
        const updatedUser = await userModel.updateUser(Number(id), { first_name, last_name, email, role });
        if (!updatedUser) {
            return res.status(404).json({ error: `User with ID ${id} not found` });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
};

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const success = await userModel.deleteUser(Number(id));
        if (!success) {
            return res.status(404).json({ error: `User with ID ${id} not found` });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
};


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser};