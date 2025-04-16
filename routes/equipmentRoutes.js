const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController.js');
// const verifyToken = require('../middleware/verifyToken.js');

// router.get('/', verifyToken, equipmentController.fetchAllEquipments);
// router.get('/:id', verifyToken, equipmentController.fetchEquipmentById);
// router.post('/', verifyToken, equipmentController.addNewEquipment);
// router.patch('/:id', verifyToken, equipmentController.modifyEquipmentById);
// router.delete('/:id', verifyToken, equipmentController.removeEquipmentById);


router.get('/', equipmentController.fetchAllEquipments);
router.get('/:id', equipmentController.fetchEquipmentById);
router.post('/', equipmentController.addNewEquipment);
router.patch('/:id', equipmentController.updateEquipmentById);
router.delete('/:id', equipmentController.removeEquipmentById);

module.exports = router;
