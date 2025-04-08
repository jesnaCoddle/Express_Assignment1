const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(Number(id));
        if (!user) {
            return res.status(404).send();
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await userModel.createUser({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await userModel.updateUser(Number(id), { name, email });
        if (!updatedUser) {
            return res.status(404).send();
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await userModel.deleteUser(Number(id));
        if (!success) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
