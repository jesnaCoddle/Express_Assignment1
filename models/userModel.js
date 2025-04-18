const db = require('../config/db.js');

async function fetchUsers() {
    try {
        const qr = `SELECT * FROM users;`;
        const result = await db.query(qr);
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function fetchUser(id) {
    try {
        const qr = `SELECT * FROM users WHERE id = ?;`;
        const result = await db.query(qr, [id]);
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function addUser(first_name, last_name, email, removeListener, password) {
    try {
        const qr = `INSERT INTO users (first_name, last_name, email, role, password) VALUES (?, ?, ?, ?, ?);`;
        const result = await db.query(qr, [first_name, last_name, email, removeListener, password]);
        return result;
    } catch (err) {
        console.log(err);
    }

}

async function updateUser(first_name, last_name, email, role, password, id) {
    try {
        const qr = `UPDATE users SET first_name = ?, last_name = ?, email = ?, role = ?, password = ? WHERE id = ?;`;
        const result = await db.query(qr, [first_name, last_name, email, role, password, id]);
        return result;
    } catch (err) {
        console.log(err);
    }

}

async function deleteUser(id) {
    try {
        const qr = `DELETE FROM users WHERE id = ?;`;
        const result = await db.query(qr, [id]);
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { fetchUsers, fetchUser, addUser, updateUser, deleteUser };
