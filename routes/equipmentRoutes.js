const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');

router.get('/', equipmentController.fetchAllEquipments);
router.get('/:id', equipmentController.fetchEquipmentById);
router.post('/', equipmentController.addNewEquipment);
router.patch('/:id', equipmentController.modifyEquipmentById);
router.delete('/:id', equipmentController.removeEquipmentById);

module.exports = router;
