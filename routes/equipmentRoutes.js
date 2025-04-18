const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController.js');
const verifyToken = require('../middleware/verifyToken.js');

router.get('/get-equipments', verifyToken, equipmentController.fetchAllEquipments);
router.get('/get-equipment/:id', verifyToken, equipmentController.fetchEquipmentById);
router.post('/create-equipment', verifyToken, equipmentController.addNewEquipment);
router.patch('/edit-equipment/:id', verifyToken, equipmentController.updateEquipmentById);
router.delete('/delete-equipment/:id', verifyToken, equipmentController.removeEquipmentById);

module.exports = router;
