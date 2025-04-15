const userModel = require('../models/userModel.js');

const fetchAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.send(users);
    } catch (error) {
        console.error(error); 
        res.status(500).send({ message: 'Error fetching users' });
    }
};

const fetchUserById = async (req, res) => {
    const userId = Number(req.params.id);
    try {
        const user = await userModel.getUserById(userId);

        if (!user) {
            return res.status(404).send({ error: `User with ID ${userId} not found` });
        }
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error fetching user' });
    }
};

const addNewUser = async (req, res) => {
    const { first_name, last_name, email, role, password } = req.body;
    try {
        const newUser = await userModel.createUser({ first_name, last_name, email, role, password });
        res.status(201).send(newUser);
    } catch (error) {
        console.error(error); 
        res.status(500).send({ message: 'Error creating user' });
    }
};

const modifyUserById = async (req, res) => {
    const userId = Number(req.params.id);
    const { first_name, last_name, email, role } = req.body;
    try {
        const updatedUser = await userModel.updateUser(userId, { first_name, last_name, email, role });
        if (!updatedUser) {
            return res.status(404).send({ error: `User with ID ${userId} not found` });
        }
        res.send(updatedUser);
    } catch (error) {
        console.error(error); 
        res.status(500).send({ message: 'Error updating user' });
    }
};

const removeUserById = async (req, res) => {
    const userId = Number(req.params.id);
    try {
        const success = await userModel.deleteUser(userId);
        if (!success) {
            return res.status(404).send({ error: `User with ID ${userId} not found` });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error); 
        res.status(500).send({ message: 'Error deleting user' });
    }
};

module.exports = { fetchAllUsers, fetchUserById, addNewUser, modifyUserById, removeUserById };