const db = require('../models/db.js');

const fetchAllUsers = async (req, res) => {
    try {
        const results = await db.query('select * from users');
        res.send(results);
    }
    catch (error) {
        console.error(err);
        res.send('error fetching books');
    }
}


const fetchUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const user = await db.query('select * from book where id=' + id);
        res.send(user);
    }
    catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching user' });
    }
};

const addNewUser = async (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let role = req.body.role;
    let password = req.body.password;

    try {
        const [newUser] = await db.query(
            `INSERT INTO users (first_name, last_name, email, role, password) VALUES ('${first_name}', '${last_name}', '${email}', '${role}', '${password}')`
        );
        res.send(newUser);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error creating user' });
    }
};

const updateUserById = async (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let role = req.body.role;
    let password = req.body.password;
    let id = req.body.id;

    try {
        const [updatedUser] = await con.query(
            `UPDATE users SET first_name='${first_name}', last_name='${last_name}', email='${email}', role='${role}', password='${password}' WHERE id='${id}'`
        );
        res.send(updatedUser);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating user' });
    }
};

const removeUserById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteUser] = await con.query(`DELETE FROM users WHERE id = ${id}`);
        res.send(deleteUser);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error deleting user' });
    }
};


module.exports = { fetchAllUsers, fetchUserById, addNewUser, updateUserById, removeUserById };