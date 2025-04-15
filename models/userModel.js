
const db = require('../models/db.js');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT id, first_name, last_name, email, role FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT id, first_name, last_name, email, role FROM users WHERE id = ?', [id]);
    return rows[0];
};

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT id, first_name, last_name, email, role FROM users WHERE email = ?', [email]);
    return rows[0];
};


const createUser = async ({ first_name, last_name, email, role, password }) => {
    const [result] = await db.query(
        'INSERT INTO users (first_name, last_name, email, role, password) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, role, password]
    );
    return { id: result.insertId, first_name, last_name, email, role };
};


const updateUser = async (id, { first_name, last_name, email, role }) => {
    const [result] = await db.query(
        'UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ? WHERE id = ?',
        [first_name, last_name, email, role, id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return { id, first_name, last_name, email, role };
};

const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail };