const db = require('../models/db.js');

const getAllEquipments = async () => {
    const [rows] = await db.query('SELECT * FROM equipment');
    return rows;
};

const getEquipmentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM equipment WHERE id = ?', [id]);
    return rows[0];
};

const getEquipmentByMakeAndModel = async (make, model) => {
    const [rows] = await db.query('SELECT * FROM equipment WHERE make = ? AND model = ?', [make, model]);
    return rows[0];
};

const createEquipment = async ({ make, model, description, daily_rate }) => {
    const [result] = await db.query(
        'INSERT INTO equipment (make, model, description, daily_rate) VALUES (?, ?, ?, ?)',
        [make, model, description, daily_rate]
    );
    return { id: result.insertId, make, model, description, daily_rate };
};


const updateEquipment = async (id, { make, model, description, daily_rate }) => {
    const [result] = await db.query(
        'UPDATE equipment SET make = ?, model = ?, description = ?, daily_rate = ? WHERE id = ?',
        [make, model, description, daily_rate, id]
    );

    if (result.affectedRows === 0) {
        return null;
    }

    return { id, make, model, description, daily_rate };
};


const deleteEquipment = async (id) => {
    const [result] = await db.query('DELETE FROM equipment WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = { getAllEquipments, getEquipmentById, getEquipmentByMakeAndModel, createEquipment, updateEquipment, deleteEquipment };
