const equipmentModel = require('../models/equipmentModel');

const getAllEquipements = async (req, res) => {
    try {
        const equipments = await equipmentModel.getAllEquipements();
        res.json(equipments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching equipment' });
    }
};

const getEquipementById = async (req, res) => {
    const { id } = req.params;
    try {
        const equipment = await equipmentModel.getEquipementById(Number(id));
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.json(equipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching equipment' });
    }
};

const createEquipement = async (req, res) => {
    const { make, model, description, daily_rate } = req.body;

    if (!make || !model) {
        return res.status(400).json({ message: 'Make and model are required' });
    }

    try {
        const newEquipment = await equipmentModel.createEquipement({
            make,
            model,
            description,
            daily_rate,
        });
        res.status(201).json(newEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating equipment' });
    }
};

const updateEquipement = async (req, res) => {
    const { id } = req.params;
    const { make, model,description, daily_rate } = req.body;

    try {
        const updatedEquipment = await equipmentModel.updateEquipement(Number(id), {
            make,
            model,
            description,
            daily_rate,
        });

        if (!updatedEquipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        res.json(updatedEquipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating equipment' });
    }
};


const deleteEquipement = async (req, res) => {
    const { id } = req.params;
    try {
        const success = await equipmentModel.deleteEquipement(Number(id));
        if (!success) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting equipment' });
    }
};

module.exports = {getAllEquipements,getEquipementById,createEquipement,updateEquipement,deleteEquipement
};
