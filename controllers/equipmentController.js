const db = require('../models/db.js')

const fetchAllEquipments = async (req, res) => {
    try {
        const equipments = await db.query('SELECT * FROM equipment');
        res.send(equipments);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const fetchEquipmentById = async (req, res) => {
    const eqId = Number(req.params.id);
    try {
        const equipment = await db.query('select * from equipment where id=' + id);
        res.send(equipment);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error fetching equipment' });
    }
};

const addNewEquipment = async (req, res) => {
    let make = req.body.make;
    let model = req.body.model;
    let description = req.body.description;
    let daily_rate = req.body.daily_rate;

    try {
        const [newEq] = await db.query(
            `INSERT INTO equipment (make, model, description, daily_rate) VALUES ('${make}', '${model}', '${description}', '${daily_rate}')`
        );
        res.send(newEq);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating equipment' });
    }
};

const updateEquipmentById = async (req, res) => {
    let make = req.body.make;
    let model = req.body.model;
    let description = req.body.description;
    let daily_rate = req.body.daily_rate;
    let id = req.body.id;
    try {
        const [updatedUser] = await db.query(
            `UPDATE equipment SET make='${make}', model='${model}', descriptiom='${descriptiom}', daily_rate='${daily_rate}' WHERE id='${id}'`
        );
        res.send(updatedUser);

    } catch (error) {
        console.error(error);
        res.send({ message: 'Error updating equipment' });
    }
};

const removeEquipmentById = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [deleteEq] = await db.query(`DELETE FROM equipment WHERE id = ${id}`);
        res.send(deleteEq);
    } catch (error) {
        console.error(error);
        res.send({ message: 'Error deleting equipment' });
    }
};

module.exports = { fetchAllEquipments, fetchEquipmentById, addNewEquipment, updateEquipmentById, removeEquipmentById };