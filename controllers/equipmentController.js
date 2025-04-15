const equipmentModel = require('../models/equipmentModel.js');

const fetchAllEquipments = async (req, res) => {
    try {
        const equipments = await equipmentModel.getAllEquipments(); 
        res.send(equipments);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error fetching equipment' });
    }
};

const fetchEquipmentById = async (req, res) => {
    const eqId = Number(req.params.id);
    try {
        const equipment = await equipmentModel.getEquipmentById(eqId);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.send(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching equipment' });
    }
};

const addNewEquipment = async (req, res) => {
    const { make, model, description, daily_rate } = req.body;

    if (!make || !model) {
        return res.status(400).send({ message: 'Make and model are required' });
    }

    try {
        const existing = await equipmentModel.getEquipmentByMakeAndModel(make, model);
        if (existing) {
            return res.status(409).send({ message: 'Equipment with the same make and model already exists' });
        }

        const newEquipment = await equipmentModel.createEquipment({ make, model, description, daily_rate }); 

        res.status(201).send(newEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating equipment' });
    }
};

const modifyEquipmentById = async (req, res) => {
    const eqId = Number(req.params.id);
    const { make, model, description, daily_rate } = req.body;

    try {
        const existing = await equipmentModel.getEquipmentByMakeAndModel(make, model);
        if (existing && existing.id !== eqId) {
            return res.status(409).send({ message: 'Another equipment with the same make and model already exists' }); 
        }

        const updatedEquipment = await equipmentModel.updateEquipment(eqId, { make, model, description, daily_rate }); 

        if (!updatedEquipment) {
            return res.status(404).send({ message: 'Equipment not found' });
        }

        res.send(updatedEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error updating equipment' });
    }
};

const removeEquipmentById = async (req, res) => {
    const eqId = Number(req.params.id);

    try {
        const success = await equipmentModel.deleteEquipment(eqId);
        if (!success) {
            return res.status(404).send({ message: 'Equipment not found' });
        }
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error deleting equipment' });
    }
};

module.exports = { fetchAllEquipments, fetchEquipmentById, addNewEquipment, modifyEquipmentById, removeEquipmentById };