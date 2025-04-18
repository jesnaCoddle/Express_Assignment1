const db = require('../config/db.js');

async function fetchEquipments() {
    try {
        const qr = `SELECT * FROM equipment;`;
        const result = await db.query(qr);
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function fetchEquipment(id) {
    try {
        const qr = `SELECT * FROM equipment WHERE id = ?;`;
        const result = await db.query(qr, [id]);
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function addEquipment(make, model, description, daily_rate) {
    try {
        const qr = `INSERT INTO equipment (make, model, description, daily_rate) VALUES (?, ?, ?, ?)`;
        const result = await db.query(qr, [make, model, description, daily_rate]);
        return result;
    } catch (err) {
        console.log(err);
    }

}

async function updateEquipment(make, model, description, daily_rate, id) {
    try {
        const qr = `UPDATE equipment SET make = ?, model = ?, description = ?, daily_rate = ? WHERE id = ?;`;
        const result = await db.query(qr, [make, model, description, daily_rate, id]);
        return result;
    } catch (err) {
        console.log(err);
    }

}

async function deleteEquipment(id) {
    try {
        const qr = `DELETE FROM equipment WHERE id = ?;`;
        const result = await db.query(qr, [id]);
        return result;
    } catch (err) {
        console.log(err);
    }
}


module.exports = { fetchEquipments, fetchEquipment, addEquipment, updateEquipment, deleteEquipment };
