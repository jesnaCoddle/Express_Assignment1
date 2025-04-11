const db = require('./db.js');

const getAllEquipements = async () => {
    const [rows] = await db.execute('SELECT * FROM equipment');
    return rows;
};

const getEquipementById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM equipment WHERE id = ?', [id]);
    return rows[0];
};

const createEquipement = async ({ make, model, description, daily_rate }) => {
    const [result] = await db.execute(
        'INSERT INTO equipment (make, model, description, daily_rate) VALUES (?, ?, ?, ?)',
        [make, model, description, daily_rate]
    );
    return { id: result.insertId, make, model, description, daily_rate };
};

const updateEquipement = async (id, { make, model, description, daily_rate }) => {
    const [result] = await db.execute(
        'UPDATE equipment SET make = ?, model = ?, description = ?, daily_rate = ? WHERE id = ?',
        [make, model, description, daily_rate, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, make, model, description, daily_rate };
};

const deleteEquipement = async (id) => {
    const [result] = await db.execute('DELETE FROM equipment WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };
