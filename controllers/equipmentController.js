const db = require('../models/db.js');

const fetchAllEquipments = async (req, res) => {
    try {
        const [equipments] = await db.query('SELECT * FROM equipment');
        res.send(equipments);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const fetchEquipmentById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [equipment] = await db.query('SELECT * FROM equipment WHERE id = ?', [id]);
        res.send(equipment);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const addNewEquipment = async (req, res) => {
    let { make, model, description, daily_rate } = req.body;

    try {
        const [newEq] = await db.query(
            'INSERT INTO equipment (make, model, description, daily_rate) VALUES (?, ?, ?, ?)',
            [make, model, description, daily_rate]
        );
        res.send({ message: 'Equipment added successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating equipment' });
    }
};

const updateEquipmentById = async (req, res) => {
    let { make, model, description, daily_rate, id } = req.body;
    try {
        const [updatedEq] = await db.query(
            'UPDATE equipment SET make = ?, model = ?, description = ?, daily_rate = ? WHERE id = ?',
            [make, model, description, daily_rate, id]
        );
        res.send({ message: 'Equipment updated'});
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating equipment' });
    }
};

const removeEquipmentById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteEq] = await db.query('DELETE FROM equipment WHERE id = ?', [id]);
        res.send({ message: 'Equipment deleted'});
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error deleting equipment' });
    }
};

module.exports = {
    fetchAllEquipments,
    fetchEquipmentById,
    addNewEquipment,
    updateEquipmentById,
    removeEquipmentById
};
