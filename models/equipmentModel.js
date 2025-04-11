const db = require('./db.js');

const getAllEquipements = async () => {
    const [rows] = await db.query('SELECT * FROM equipment');
    return rows;
};

const getEquipementById = async (id) => {
    const [rows] = await db.query('SELECT * FROM equipment WHERE id = ?', [id]);
    return rows[0];
};

const createEquipement = async ({ make, model, description, daily_rate }) => {
    const [result] = await db.query(
        'INSERT INTO equipment (make, model, description, daily_rate) VALUES (?, ?, ?, ?)',
        [make, model, description, daily_rate]
    );
    return { id: result.insertId, make, model, description, daily_rate };
};

const updateEquipement = async (id, { make, model, description, daily_rate }) => {
    const [result] = await db.query(
        'UPDATE equipment SET make = ?, model = ?, description = ?, daily_rate = ? WHERE id = ?',
        [make, model, description, daily_rate, id]
    );
};

const deleteEquipement = async (id) => {
    const [result] = await db.query('DELETE FROM equipment WHERE id = ?', [id]);
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };
