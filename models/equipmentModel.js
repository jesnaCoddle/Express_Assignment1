const db = require('../models/db.js');  

const getAllEquipements = async () => {
    const [rows] = await db.execute('SELECT * FROM equipment');
    return rows;
};

const getEquipementById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM equipment WHERE id = ?', [id]);
    return rows[0];  
};

const createEquipement = async ({ make, model}) => {
    const [result] = await db.execute('INSERT INTO equipment (make, model) VALUES (?, ?)', [make, model]);
    return { id: result.insertId,make, model};  
};

const updateEquipement = async (id, {make, model }) => {
    const [result] = await db.execute(
        'UPDATE equipment SET make = ?, model = ? WHERE id = ?',
        [make, model, id]
    );
    if (result.affectedRows === 0) return null;  
        return { id,make, model };  
};

const deleteEquipement = async (id) => {
    const [result] = await db.execute('DELETE FROM equipment WHERE id = ?', [id]);
    return result.affectedRows > 0;  
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };
