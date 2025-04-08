const db = require('../models/db');  

const getAllEquipements = async () => {
    const [rows] = await db.execute('SELECT * FROM equipment');
    return rows;
};

const getEquipementById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM equipment WHERE id = ?', [id]);
    return rows[0];  
};

const createEquipement = async ({ name, email }) => {
    const [result] = await db.execute('INSERT INTO equipment (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };  
};

const updateEquipement = async (id, { name, email }) => {
    const [result] = await db.execute(
        'UPDATE equipment SET name = ?, email = ? WHERE id = ?',
        [name, email, id]
    );
    if (result.affectedRows === 0) return null;  
        return { id, name, email };  
};

const deleteEquipement = async (id) => {
    const [result] = await db.execute('DELETE FROM equipment WHERE id = ?', [id]);
    return result.affectedRows > 0;  
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };
