const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');


router.get('/equipment', equipmentController.getAllEquipements);
router.get('/equipment/:id', equipmentController.getEquipementById);
router.post('/equipment', equipmentController.createEquipement);
router.patch('/equipment/:id', equipmentController.updateEquipement);
router.delete('/equipment/:id', equipmentController.deleteEquipement);

module.exports = router;
