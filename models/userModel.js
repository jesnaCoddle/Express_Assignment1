const db = require('../models/db.js');  

const getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];  
};

const createUser = async ({ first_name, email }) => {
    const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [first_name, email]);
    return { id: result.insertId, first_name, email };  
};

const updateUser = async (id, { first_name, email }) => {
    const [result] = await db.execute(
        'UPDATE users SET first_name = ?, email = ? WHERE id = ?',
        [name, email, id]
    );
    if (result.affectedRows === 0) return null;  
    return { id, first_name, email };  
};


const deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows > 0;  
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
