const db = require('../models/db');  

const getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];  
};

const createUser = async ({ name, email }) => {
    const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };  
};

const updateUser = async (id, { name, email }) => {
    const [result] = await db.execute(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [name, email, id]
    );
    if (result.affectedRows === 0) return null;  
    return { id, name, email };  
};


const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;  
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
