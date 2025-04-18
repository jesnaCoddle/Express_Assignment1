const con = require('../models/equipmentModel');

const fetchAllEquipments = async (req, res) => {
    try {
        const [equipments] = await con.fetchEquipments();
        res.send(equipments);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const fetchEquipmentById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [equipment] = await con.fetchEquipment([id]);
        res.send(equipment);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const addNewEquipment = async (req, res) => {
    let { make, model, description, daily_rate } = req.body;

    try {
        const [newEq] = await con.addEquipment(make, model, description, daily_rate);
        res.send(newEq);
        res.send({ message: 'Equipment added successfully' });
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error creating equipment' });
    }
};

const updateEquipmentById = async (req, res) => {
    let { make, model, description, daily_rate, id } = req.body;
    try {
        const [updatedEq] = await con.updateEquipment(make, model, description, daily_rate, id);
        res.send(updatedEq);
        res.send({ message: 'Equipment updated' });
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating equipment' });
    }
};

const removeEquipmentById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteEq] = await con.deleteEquipment([id]);
        res.send(deleteEq);
        res.send({ message: 'Equipment deleted' });
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
