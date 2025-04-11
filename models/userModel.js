const db = require('./db.js');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
};

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
};

const createUser = async ({ first_name, last_name, email, role }) => {
    const [result] = await db.query(
        'INSERT INTO users (first_name, last_name, email, role) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, role]
    );
};

const updateUser = async (id, { first_name, last_name, email, role }) => {
    const [result] = await db.query(
        'UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ? WHERE id = ?',
        [first_name, last_name, email, role, id]
    );

};


const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail };
