const con = require('../models/userModel');

const fetchAllUsers = async (req, res) => {
    try {
        const [results] = await con.fetchUsers();
        res.send(results);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching users' });
    }
};

const fetchUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [user] = await con.fetchUser([id]);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching user' });
    }
};

const addNewUser = async (req, res) => {
    let { first_name, last_name, email, role, password } = req.body;

    try {
        const [newUser] = await con.addUser(first_name, last_name, email, role, password)
        res.send(newUser);
        res.send({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error creating user' });
    }
};

const updateUserById = async (req, res) => {
    let { first_name, last_name, email, role, password, id } = req.body;

    try {
        const [updatedUser] = await con.updateUser(first_name, last_name, email, role, password, id)
        res.send(updatedUser);
        res.send({ message: 'User updated succesfully' });
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating user' });
    }
};

const removeUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteUser] = await con.deleteUser([id]);
        res.send(deleteUser);
        res.send({ message: 'User deleted succesfully' });
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
