const db = require('./db.js');

const getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const getUserByEmail = async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};

const createUser = async ({ first_name, last_name, email, role }) => {
    const [result] = await db.execute(
        'INSERT INTO users (first_name, last_name, email, role) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, role]
    );
    return { id: result.insertId, first_name, last_name, email, role };
};

const updateUser = async (id, { first_name, last_name, email, role }) => {
    const [result] = await db.execute(
        'UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ? WHERE id = ?',
        [first_name, last_name, email, role, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, first_name, last_name, email, role };
};


const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail };
