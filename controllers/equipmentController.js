const equipmentModel = require('../models/equipmentModel'); 

const getAllEquipements = async (req, res) => {
    try {
        const equipment = await equipmentModel.getAllEquipements();
        res.json(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const getEquipementById = async (req, res) => {
    const { id } = req.params;
    try {
        const equipment = await equipmentModel.getEquipementById(Number(id));
        if (!equipment) {
            return res.status(404).send();
        }
        res.json(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const createEquipement = async (req, res) => {
    const { name, email } = req.body;  
    try {
        const newEquipment = await equipmentModel.createEquipement({ name, email });
        res.status(201).json(newEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const updateEquipement = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedEquipment = await equipmentModel.updateEquipement(Number(id), { name, email });
        if (!updatedEquipment) {
            return res.status(404).send();
        }
        res.json(updatedEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

const deleteEquipement = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await equipmentModel.deleteEquipement(Number(id));
        if (!success) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };
