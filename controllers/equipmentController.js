
const equipmentModel = require('../models/equipmentModel');

const getAllEquipements = async (req, res) => {
    try {
        const users = await equipmentModel.getAllEquipements();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting equipement'});
    }
};

const getEquipementById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await equipmentModel.getEquipementById(Number(id));
        if (!user) {
            return res.status(404).send();
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting equipement'});
    }
};

const createEquipement = async (req, res) => {
    const { make, model} = req.body;
    try {
        const newUser = await equipmentModel.createEquipement({ make, model});
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting equipement'});
    }
};

const updateEquipement = async (req, res) => {
    const { id } = req.params;
    const {make, model} = req.body;
    try {
        const updatedUser = await equipmentModel.updateEquipement(Number(id), {make, model});
        if (!updatedUser) {
            return res.status(404).send();
        }
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting equipement'});
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
        res.status(500).json({message: 'Error deleting equipement'});
    }
};

module.exports = { getAllEquipements, getEquipementById, createEquipement, updateEquipement, deleteEquipement };



